# ControllersSystemAdvisoriesDBLookup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advisory_type** | **int** |  | [optional] 
**cve_count** | **int** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**public_date** | **str** |  | [optional] 
**severity** | **int** |  | [optional] 
**synopsis** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.controllers_system_advisories_db_lookup import ControllersSystemAdvisoriesDBLookup

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersSystemAdvisoriesDBLookup from a JSON string
controllers_system_advisories_db_lookup_instance = ControllersSystemAdvisoriesDBLookup.from_json(json)
# print the JSON string representation of the object
print(ControllersSystemAdvisoriesDBLookup.to_json())

# convert the object into a dict
controllers_system_advisories_db_lookup_dict = controllers_system_advisories_db_lookup_instance.to_dict()
# create an instance of ControllersSystemAdvisoriesDBLookup from a dict
controllers_system_advisories_db_lookup_from_dict = ControllersSystemAdvisoriesDBLookup.from_dict(controllers_system_advisories_db_lookup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


