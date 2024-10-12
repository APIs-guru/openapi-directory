# AdBlockingConfiguration

Campaign ad blocking settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether this campaign has enabled ad blocking. When true, ad blocking is enabled for placements in the campaign, but this may be overridden by site and placement settings. When false, ad blocking is disabled for all placements under the campaign, regardless of site and placement settings. | [optional] 

## Example

```python
from openapi_client.models.ad_blocking_configuration import AdBlockingConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AdBlockingConfiguration from a JSON string
ad_blocking_configuration_instance = AdBlockingConfiguration.from_json(json)
# print the JSON string representation of the object
print(AdBlockingConfiguration.to_json())

# convert the object into a dict
ad_blocking_configuration_dict = ad_blocking_configuration_instance.to_dict()
# create an instance of AdBlockingConfiguration from a dict
ad_blocking_configuration_from_dict = AdBlockingConfiguration.from_dict(ad_blocking_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


