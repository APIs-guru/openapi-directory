# Share

A share data transfer object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ShareProperties**](ShareProperties.md) |  | [optional] 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.share import Share

# TODO update the JSON string below
json = "{}"
# create an instance of Share from a JSON string
share_instance = Share.from_json(json)
# print the JSON string representation of the object
print(Share.to_json())

# convert the object into a dict
share_dict = share_instance.to_dict()
# create an instance of Share from a dict
share_from_dict = Share.from_dict(share_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


