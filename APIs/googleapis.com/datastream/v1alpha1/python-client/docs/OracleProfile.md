# OracleProfile

Oracle database profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_attributes** | **Dict[str, str]** | Connection string attributes | [optional] 
**database_service** | **str** | Required. Database for the Oracle connection. | [optional] 
**hostname** | **str** | Required. Hostname for the Oracle connection. | [optional] 
**password** | **str** | Required. Password for the Oracle connection. | [optional] 
**port** | **int** | Port for the Oracle connection, default value is 1521. | [optional] 
**username** | **str** | Required. Username for the Oracle connection. | [optional] 

## Example

```python
from openapi_client.models.oracle_profile import OracleProfile

# TODO update the JSON string below
json = "{}"
# create an instance of OracleProfile from a JSON string
oracle_profile_instance = OracleProfile.from_json(json)
# print the JSON string representation of the object
print(OracleProfile.to_json())

# convert the object into a dict
oracle_profile_dict = oracle_profile_instance.to_dict()
# create an instance of OracleProfile from a dict
oracle_profile_from_dict = OracleProfile.from_dict(oracle_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


