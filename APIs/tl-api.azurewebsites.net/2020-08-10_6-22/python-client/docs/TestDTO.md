# TestDTO

The TestDTO Class. Contains relevant fields of Test DTO by masking actual Test entity's fields in application.             

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Id of the Test object              | [optional] 

## Example

```python
from openapi_client.models.test_dto import TestDTO

# TODO update the JSON string below
json = "{}"
# create an instance of TestDTO from a JSON string
test_dto_instance = TestDTO.from_json(json)
# print the JSON string representation of the object
print(TestDTO.to_json())

# convert the object into a dict
test_dto_dict = test_dto_instance.to_dict()
# create an instance of TestDTO from a dict
test_dto_from_dict = TestDTO.from_dict(test_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


