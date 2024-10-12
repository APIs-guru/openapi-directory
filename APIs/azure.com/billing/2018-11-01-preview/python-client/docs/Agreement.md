# Agreement

An agreement resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AgreementProperties**](AgreementProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.agreement import Agreement

# TODO update the JSON string below
json = "{}"
# create an instance of Agreement from a JSON string
agreement_instance = Agreement.from_json(json)
# print the JSON string representation of the object
print(Agreement.to_json())

# convert the object into a dict
agreement_dict = agreement_instance.to_dict()
# create an instance of Agreement from a dict
agreement_from_dict = Agreement.from_dict(agreement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


