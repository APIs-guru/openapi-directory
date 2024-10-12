# Subject

Subject describes parts of a distinguished name that, in turn, describes the subject of the certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_name** | **str** | The \&quot;common name\&quot; of the subject. | [optional] 
**country_code** | **str** | The country code of the subject. | [optional] 
**locality** | **str** | The locality or city of the subject. | [optional] 
**organization** | **str** | The organization of the subject. | [optional] 
**organizational_unit** | **str** | The organizational_unit of the subject. | [optional] 
**postal_code** | **str** | The postal code of the subject. | [optional] 
**province** | **str** | The province, territory, or regional state of the subject. | [optional] 
**street_address** | **str** | The street address of the subject. | [optional] 

## Example

```python
from openapi_client.models.subject import Subject

# TODO update the JSON string below
json = "{}"
# create an instance of Subject from a JSON string
subject_instance = Subject.from_json(json)
# print the JSON string representation of the object
print(Subject.to_json())

# convert the object into a dict
subject_dict = subject_instance.to_dict()
# create an instance of Subject from a dict
subject_from_dict = Subject.from_dict(subject_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


