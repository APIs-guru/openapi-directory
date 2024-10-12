# ExportError

The export error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_display_name** | **str** | The AAD side display name | [optional] 
**aad_distinguished_name** | **str** | The AAD side distinguished name for the object. | [optional] 
**aad_mail** | **str** | The AAD side email for the object. | [optional] 
**aad_object_guid** | **str** | The AAD side object guid. | [optional] 
**aad_object_type** | **str** | The AAD side object type. | [optional] 
**aad_source_of_authority** | **str** | The AAD side source of authority for the object. | [optional] 
**aad_user_principal_name** | **str** | The AAD side user principal name. | [optional] 
**ad_display_name** | **str** | The display name for the AD object. | [optional] 
**ad_distinguished_name** | **str** | The distinguished name for the AD object. | [optional] 
**ad_mail** | **str** | The email for the AD object. | [optional] 
**ad_object_guid** | **str** | The AD object guid. | [optional] 
**ad_object_type** | **str** | The AD object type | [optional] 
**ad_source_anchor** | **str** | The AD source anchor. | [optional] 
**ad_source_of_authority** | **str** | The source of authority for the AD object. | [optional] 
**ad_user_principal_name** | **str** | The user principal name for the AD object. | [optional] 
**attribute_multi_value** | **bool** | Indicates if the attribute is multi valued or not. | [optional] 
**attribute_name** | **str** | The attribute name. | [optional] 
**attribute_value** | **str** | The attribute value. | [optional] 
**cloud_anchor** | **str** | The name of the cloud anchor. | [optional] 
**connector_id** | **str** | The connector Id. | [optional] 
**cs_object_id** | **str** | The cloud object Id. | [optional] 
**dn** | **str** | The distinguished name. | [optional] 
**error_code** | **str** | The error code. | [optional] 
**id** | **str** | The error Id. | [optional] 
**last_dir_sync_time** | **datetime** | The date and time of last sync run. | [optional] 
**max_limit** | **str** | The maximum limit. | [optional] 
**message** | **str** | The export error message. | [optional] 
**min_limit** | **str** | The minimum limit. | [optional] 
**modified_attribute_value** | **str** | The modified attribute value. | [optional] 
**object_id_conflict** | **str** | The object Id with which there was an attribute conflict. | [optional] 
**retry_count** | **int** | The retry count. | [optional] 
**run_step_result_id** | **str** | The run step result Id. | [optional] 
**sam_account_name** | **str** | The SAM account name. | [optional] 
**server_error_detail** | **str** | The server error detail. | [optional] 
**time_first_occured** | **datetime** | The date and time when the export error first occurred. | [optional] 
**time_occured** | **datetime** | The date and time of occurrence. | [optional] 
**type** | **str** | The type of error. | [optional] 

## Example

```python
from openapi_client.models.export_error import ExportError

# TODO update the JSON string below
json = "{}"
# create an instance of ExportError from a JSON string
export_error_instance = ExportError.from_json(json)
# print the JSON string representation of the object
print(ExportError.to_json())

# convert the object into a dict
export_error_dict = export_error_instance.to_dict()
# create an instance of ExportError from a dict
export_error_from_dict = ExportError.from_dict(export_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


