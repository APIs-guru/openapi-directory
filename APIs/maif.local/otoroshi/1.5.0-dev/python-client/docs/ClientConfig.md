# ClientConfig

The configuration of the circuit breaker for a service descriptor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backoff_factor** | **int** | Specify the factor to multiply the delay for each retry | 
**call_timeout** | **int** | Specify how long each call should last at most in milliseconds | 
**global_timeout** | **int** | Specify how long the global call (with retries) should last at most in milliseconds | 
**max_errors** | **int** | Specify how many errors can pass before opening the circuit breaker | 
**retries** | **int** | Specify how many times the client will try to fetch the result of the request after an error before giving up. | 
**retry_initial_delay** | **int** | Specify the delay between two retries. Each retry, the delay is multiplied by the backoff factor | 
**sample_interval** | **int** | Specify the sliding window time for the circuit breaker in milliseconds, after this time, error count will be reseted | 
**use_circuit_breaker** | **bool** | Use a circuit breaker to avoid cascading failure when calling chains of services. Highly recommended ! | 

## Example

```python
from openapi_client.models.client_config import ClientConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ClientConfig from a JSON string
client_config_instance = ClientConfig.from_json(json)
# print the JSON string representation of the object
print(ClientConfig.to_json())

# convert the object into a dict
client_config_dict = client_config_instance.to_dict()
# create an instance of ClientConfig from a dict
client_config_from_dict = ClientConfig.from_dict(client_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


