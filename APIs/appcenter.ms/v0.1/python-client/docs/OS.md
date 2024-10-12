# OS


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Count current of OS. | [optional] 
**os_name** | **str** | OS name. | [optional] 
**previous_count** | **int** | Count of previous OS. | [optional] 

## Example

```python
from openapi_client.models.os import OS

# TODO update the JSON string below
json = "{}"
# create an instance of OS from a JSON string
os_instance = OS.from_json(json)
# print the JSON string representation of the object
print(OS.to_json())

# convert the object into a dict
os_dict = os_instance.to_dict()
# create an instance of OS from a dict
os_from_dict = OS.from_dict(os_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


