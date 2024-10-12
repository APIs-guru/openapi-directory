# InstanceWrite



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_duration** | **int** |  | [optional] 
**message** | **str** |  | [optional] 
**rules_count** | **int** |  | [optional] 
**rules_hash** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.instance_write import InstanceWrite

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceWrite from a JSON string
instance_write_instance = InstanceWrite.from_json(json)
# print the JSON string representation of the object
print(InstanceWrite.to_json())

# convert the object into a dict
instance_write_dict = instance_write_instance.to_dict()
# create an instance of InstanceWrite from a dict
instance_write_from_dict = InstanceWrite.from_dict(instance_write_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


