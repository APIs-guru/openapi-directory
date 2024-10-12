# CheckDataAccessResponse

Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_details** | [**Dict[str, ConsentEvaluation]**](ConsentEvaluation.md) | The resource names of all evaluated Consents mapped to their evaluation. | [optional] 
**consented** | **bool** | Whether the requested resource is consented for the given use. | [optional] 

## Example

```python
from openapi_client.models.check_data_access_response import CheckDataAccessResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckDataAccessResponse from a JSON string
check_data_access_response_instance = CheckDataAccessResponse.from_json(json)
# print the JSON string representation of the object
print(CheckDataAccessResponse.to_json())

# convert the object into a dict
check_data_access_response_dict = check_data_access_response_instance.to_dict()
# create an instance of CheckDataAccessResponse from a dict
check_data_access_response_from_dict = CheckDataAccessResponse.from_dict(check_data_access_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


