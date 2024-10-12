# RiskyIPBlobUri

The blob uri pointing to Risky IP Report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_create_date_time** | **datetime** | Time at which the new Risky IP report was requested. | [optional] 
**job_completion_time** | **datetime** | Time at which the blob creation job for the new Risky IP report was completed. | [optional] 
**result_sas_uri** | **str** | The blob uri for the report. | [optional] 
**service_id** | **str** | The service id for whom the report belongs to. | [optional] 
**status** | **str** | Status of the Risky IP report generation. | [optional] 
**tenant_id** | **str** | The tenant id for whom the report belongs to. | [optional] 

## Example

```python
from openapi_client.models.risky_ip_blob_uri import RiskyIPBlobUri

# TODO update the JSON string below
json = "{}"
# create an instance of RiskyIPBlobUri from a JSON string
risky_ip_blob_uri_instance = RiskyIPBlobUri.from_json(json)
# print the JSON string representation of the object
print(RiskyIPBlobUri.to_json())

# convert the object into a dict
risky_ip_blob_uri_dict = risky_ip_blob_uri_instance.to_dict()
# create an instance of RiskyIPBlobUri from a dict
risky_ip_blob_uri_from_dict = RiskyIPBlobUri.from_dict(risky_ip_blob_uri_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


