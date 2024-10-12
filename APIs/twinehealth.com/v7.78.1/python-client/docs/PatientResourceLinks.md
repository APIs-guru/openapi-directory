# PatientResourceLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_self** | **str** |  | [optional] 
**twine_web_app** | **str** | A link to the patient record in the Fitbit Plus web application. | [optional] 

## Example

```python
from openapi_client.models.patient_resource_links import PatientResourceLinks

# TODO update the JSON string below
json = "{}"
# create an instance of PatientResourceLinks from a JSON string
patient_resource_links_instance = PatientResourceLinks.from_json(json)
# print the JSON string representation of the object
print(PatientResourceLinks.to_json())

# convert the object into a dict
patient_resource_links_dict = patient_resource_links_instance.to_dict()
# create an instance of PatientResourceLinks from a dict
patient_resource_links_from_dict = PatientResourceLinks.from_dict(patient_resource_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


