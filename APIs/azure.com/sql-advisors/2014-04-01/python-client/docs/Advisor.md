# Advisor

Database Advisor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Resource kind. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] [readonly] 
**properties** | [**AdvisorProperties**](AdvisorProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.advisor import Advisor

# TODO update the JSON string below
json = "{}"
# create an instance of Advisor from a JSON string
advisor_instance = Advisor.from_json(json)
# print the JSON string representation of the object
print(Advisor.to_json())

# convert the object into a dict
advisor_dict = advisor_instance.to_dict()
# create an instance of Advisor from a dict
advisor_from_dict = Advisor.from_dict(advisor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


