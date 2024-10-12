# Commentary1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | The commentarys&#39; created | [optional] 
**detail** | **str** | The commentarys&#39; detail | [optional] 
**employee** | [**Employee1**](Employee1.md) |  | [optional] 
**pay_run** | [**PayRun1**](PayRun1.md) |  | [optional] 

## Example

```python
from openapi_client.models.commentary1 import Commentary1

# TODO update the JSON string below
json = "{}"
# create an instance of Commentary1 from a JSON string
commentary1_instance = Commentary1.from_json(json)
# print the JSON string representation of the object
print(Commentary1.to_json())

# convert the object into a dict
commentary1_dict = commentary1_instance.to_dict()
# create an instance of Commentary1 from a dict
commentary1_from_dict = Commentary1.from_dict(commentary1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


