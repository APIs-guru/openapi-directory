# Updated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**at** | **datetime** |  | [optional] 
**by** | [**UpdatedBy**](UpdatedBy.md) |  | [optional] 

## Example

```python
from openapi_client.models.updated import Updated

# TODO update the JSON string below
json = "{}"
# create an instance of Updated from a JSON string
updated_instance = Updated.from_json(json)
# print the JSON string representation of the object
print(Updated.to_json())

# convert the object into a dict
updated_dict = updated_instance.to_dict()
# create an instance of Updated from a dict
updated_from_dict = Updated.from_dict(updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


