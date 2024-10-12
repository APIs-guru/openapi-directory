# ThirdPartyJobInstruction1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employer_href** | **str** | The third party job instructions&#39; employer href | [optional] 
**holding_date** | **datetime** | The third party job instructions&#39; holding date | [optional] 
**instruction_type** | **str** | The third party job instructions&#39; instruction type | [optional] 
**meta_data** | **object** | The third party job instructions&#39; meta data | [optional] 
**pay_load** | **str** | The third party job instructions&#39; pay load | [optional] 

## Example

```python
from openapi_client.models.third_party_job_instruction1 import ThirdPartyJobInstruction1

# TODO update the JSON string below
json = "{}"
# create an instance of ThirdPartyJobInstruction1 from a JSON string
third_party_job_instruction1_instance = ThirdPartyJobInstruction1.from_json(json)
# print the JSON string representation of the object
print(ThirdPartyJobInstruction1.to_json())

# convert the object into a dict
third_party_job_instruction1_dict = third_party_job_instruction1_instance.to_dict()
# create an instance of ThirdPartyJobInstruction1 from a dict
third_party_job_instruction1_from_dict = ThirdPartyJobInstruction1.from_dict(third_party_job_instruction1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


