# FetchPatientsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PatientResource]**](PatientResource.md) |  | 
**links** | [**CollectionResponseLinks**](CollectionResponseLinks.md) |  | [optional] 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_patients_response import FetchPatientsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchPatientsResponse from a JSON string
fetch_patients_response_instance = FetchPatientsResponse.from_json(json)
# print the JSON string representation of the object
print(FetchPatientsResponse.to_json())

# convert the object into a dict
fetch_patients_response_dict = fetch_patients_response_instance.to_dict()
# create an instance of FetchPatientsResponse from a dict
fetch_patients_response_from_dict = FetchPatientsResponse.from_dict(fetch_patients_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


