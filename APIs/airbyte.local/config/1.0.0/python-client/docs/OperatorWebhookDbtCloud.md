# OperatorWebhookDbtCloud


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **int** | The account id associated with the job | 
**job_id** | **int** | The job id associated with the job | 

## Example

```python
from openapi_client.models.operator_webhook_dbt_cloud import OperatorWebhookDbtCloud

# TODO update the JSON string below
json = "{}"
# create an instance of OperatorWebhookDbtCloud from a JSON string
operator_webhook_dbt_cloud_instance = OperatorWebhookDbtCloud.from_json(json)
# print the JSON string representation of the object
print(OperatorWebhookDbtCloud.to_json())

# convert the object into a dict
operator_webhook_dbt_cloud_dict = operator_webhook_dbt_cloud_instance.to_dict()
# create an instance of OperatorWebhookDbtCloud from a dict
operator_webhook_dbt_cloud_from_dict = OperatorWebhookDbtCloud.from_dict(operator_webhook_dbt_cloud_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


