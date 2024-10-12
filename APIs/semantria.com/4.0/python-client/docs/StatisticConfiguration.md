# StatisticConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calls_data** | **int** | Total number of data API calls made. These affect you API balance | 
**calls_polling** | **int** | Total number of polling API calls made. These do not affect API balance | 
**calls_settings** | **int** | Total number of settings API calls made. These do not affect API balance | 
**colls_failed** | **int** | Total number of collections that have failed to be processed | 
**colls_processed** | **int** | Total numbers of collections that have been successfully processed | 
**colls_responded** | **int** | Total number of successfully processed collections that have been returned | 
**config_id** | **str** | Unique identifier of configuration | 
**docs_failed** | **int** | Total number of documents that have failed to be processed | 
**docs_processed** | **int** | Total number of documents that have been successfully processed | 
**docs_responded** | **int** | Total number of successfully processed documents that have been returned | 
**latest_used_app** | **str** | The latest application that used the API on this account | 
**name** | **str** | The name of configuration | 
**overall_batches** | **int** | Total number of queued batches of texts processed | 
**overall_calls** | **int** | Total number of API calls made | 
**overall_docs** | **int** | Total number of documents that have been queued | 
**overall_exceeded** | **int** | Total number of documents that have exceeded the favorable (suggested) limit | 
**overall_texts** | **int** | Total number of texts processed | 
**overcall_colls** | **int** | Total numbers of collections that have been queued | 
**used_apps** | **str** | A list of all the applications that have used the API on this account | 

## Example

```python
from openapi_client.models.statistic_configuration import StatisticConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of StatisticConfiguration from a JSON string
statistic_configuration_instance = StatisticConfiguration.from_json(json)
# print the JSON string representation of the object
print(StatisticConfiguration.to_json())

# convert the object into a dict
statistic_configuration_dict = statistic_configuration_instance.to_dict()
# create an instance of StatisticConfiguration from a dict
statistic_configuration_from_dict = StatisticConfiguration.from_dict(statistic_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


