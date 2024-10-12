# CdnEndpoint

Defines the ARM Resource ID for the linked endpoints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ARM Resource ID string. | [optional] 

## Example

```python
from openapi_client.models.cdn_endpoint import CdnEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of CdnEndpoint from a JSON string
cdn_endpoint_instance = CdnEndpoint.from_json(json)
# print the JSON string representation of the object
print(CdnEndpoint.to_json())

# convert the object into a dict
cdn_endpoint_dict = cdn_endpoint_instance.to_dict()
# create an instance of CdnEndpoint from a dict
cdn_endpoint_from_dict = CdnEndpoint.from_dict(cdn_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


