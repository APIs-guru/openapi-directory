# CreatePatientRequestMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_duplicates** | **bool** | If &#x60;true&#x60;, patients with any conflicting identifiers (same &#x60;system&#x60; and &#x60;value&#x60;) will be ignored. Useful for gracefully skipping duplicates after errors occur during bulk create.  | [optional] [default to False]

## Example

```python
from openapi_client.models.create_patient_request_meta import CreatePatientRequestMeta

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePatientRequestMeta from a JSON string
create_patient_request_meta_instance = CreatePatientRequestMeta.from_json(json)
# print the JSON string representation of the object
print(CreatePatientRequestMeta.to_json())

# convert the object into a dict
create_patient_request_meta_dict = create_patient_request_meta_instance.to_dict()
# create an instance of CreatePatientRequestMeta from a dict
create_patient_request_meta_from_dict = CreatePatientRequestMeta.from_dict(create_patient_request_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


