# EmployerSecret1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | The employer secrets&#39; created | [optional] 
**name** | **str** | The employer secrets&#39; name | [optional] 
**value** | **str** | The employer secrets&#39; value | [optional] 

## Example

```python
from openapi_client.models.employer_secret1 import EmployerSecret1

# TODO update the JSON string below
json = "{}"
# create an instance of EmployerSecret1 from a JSON string
employer_secret1_instance = EmployerSecret1.from_json(json)
# print the JSON string representation of the object
print(EmployerSecret1.to_json())

# convert the object into a dict
employer_secret1_dict = employer_secret1_instance.to_dict()
# create an instance of EmployerSecret1 from a dict
employer_secret1_from_dict = EmployerSecret1.from_dict(employer_secret1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


