# BulkCheckRequest

Message used to check for the existence of multiple digital asset links within a single RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_google_internal_data_sources** | **bool** | Same configuration as in Check request, all statements checks will use same configurations. | [optional] 
**default_relation** | **str** | If specified, will be used in any given template statement that doesn’t specify a relation. | [optional] 
**default_source** | [**Asset**](Asset.md) |  | [optional] 
**default_target** | [**Asset**](Asset.md) |  | [optional] 
**skip_cache_lookup** | **bool** | Same configuration as in Check request, all statements checks will use same configurations. | [optional] 
**statements** | [**List[StatementTemplate]**](StatementTemplate.md) | List of statements to check. For each statement, you can omit a field if the corresponding default_* field below was supplied. Minimum 1 statement; maximum 1,000 statements. Any additional statements will be ignored. | [optional] 

## Example

```python
from openapi_client.models.bulk_check_request import BulkCheckRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkCheckRequest from a JSON string
bulk_check_request_instance = BulkCheckRequest.from_json(json)
# print the JSON string representation of the object
print(BulkCheckRequest.to_json())

# convert the object into a dict
bulk_check_request_dict = bulk_check_request_instance.to_dict()
# create an instance of BulkCheckRequest from a dict
bulk_check_request_from_dict = BulkCheckRequest.from_dict(bulk_check_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


