# SupportEngineer

Support engineer information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **str** | Email address of the Azure Support engineer assigned to the support ticket. | [optional] [readonly] 

## Example

```python
from openapi_client.models.support_engineer import SupportEngineer

# TODO update the JSON string below
json = "{}"
# create an instance of SupportEngineer from a JSON string
support_engineer_instance = SupportEngineer.from_json(json)
# print the JSON string representation of the object
print(SupportEngineer.to_json())

# convert the object into a dict
support_engineer_dict = support_engineer_instance.to_dict()
# create an instance of SupportEngineer from a dict
support_engineer_from_dict = SupportEngineer.from_dict(support_engineer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


