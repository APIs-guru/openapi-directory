# ImportRulesJobDetails

Details regarding an Import Rules background job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_format** | **str** | Output only. The requested file format. | [optional] [readonly] 
**files** | **List[str]** | Output only. File names used for the import rules job. | [optional] [readonly] 

## Example

```python
from openapi_client.models.import_rules_job_details import ImportRulesJobDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ImportRulesJobDetails from a JSON string
import_rules_job_details_instance = ImportRulesJobDetails.from_json(json)
# print the JSON string representation of the object
print(ImportRulesJobDetails.to_json())

# convert the object into a dict
import_rules_job_details_dict = import_rules_job_details_instance.to_dict()
# create an instance of ImportRulesJobDetails from a dict
import_rules_job_details_from_dict = ImportRulesJobDetails.from_dict(import_rules_job_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


