# RunParameters

Run parameters for a job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_secrets** | [**List[CustomerSecret]**](CustomerSecret.md) | List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys. | [optional] 
**data_service_input** | **object** | A generic json used differently by each data service type. | [optional] 
**user_confirmation** | **str** | Enum to detect if user confirmation is required. If not passed will default to NotRequired. | [optional] [default to 'NotRequired']

## Example

```python
from openapi_client.models.run_parameters import RunParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RunParameters from a JSON string
run_parameters_instance = RunParameters.from_json(json)
# print the JSON string representation of the object
print(RunParameters.to_json())

# convert the object into a dict
run_parameters_dict = run_parameters_instance.to_dict()
# create an instance of RunParameters from a dict
run_parameters_from_dict = RunParameters.from_dict(run_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


