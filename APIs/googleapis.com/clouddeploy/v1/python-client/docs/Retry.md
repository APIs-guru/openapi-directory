# Retry

Retries the failed job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempts** | **str** | Required. Total number of retries. Retry is skipped if set to 0; The minimum value is 1, and the maximum value is 10. | [optional] 
**backoff_mode** | **str** | Optional. The pattern of how wait time will be increased. Default is linear. Backoff mode will be ignored if &#x60;wait&#x60; is 0. | [optional] 
**wait** | **str** | Optional. How long to wait for the first retry. Default is 0, and the maximum value is 14d. | [optional] 

## Example

```python
from openapi_client.models.retry import Retry

# TODO update the JSON string below
json = "{}"
# create an instance of Retry from a JSON string
retry_instance = Retry.from_json(json)
# print the JSON string representation of the object
print(Retry.to_json())

# convert the object into a dict
retry_dict = retry_instance.to_dict()
# create an instance of Retry from a dict
retry_from_dict = Retry.from_dict(retry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


