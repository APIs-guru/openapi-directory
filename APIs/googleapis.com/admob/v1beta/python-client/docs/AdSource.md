# AdSource

Definition of a mediation ad source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_source_id** | **str** | ID of this ad source. | [optional] 
**name** | **str** | Resource name of this ad source. Format is: accounts/{publisher_id}/adSources/{ad_source_id} | [optional] 
**title** | **str** | Display name of this ad source. | [optional] 

## Example

```python
from openapi_client.models.ad_source import AdSource

# TODO update the JSON string below
json = "{}"
# create an instance of AdSource from a JSON string
ad_source_instance = AdSource.from_json(json)
# print the JSON string representation of the object
print(AdSource.to_json())

# convert the object into a dict
ad_source_dict = ad_source_instance.to_dict()
# create an instance of AdSource from a dict
ad_source_from_dict = AdSource.from_dict(ad_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


