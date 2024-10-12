# Source

Represents display or publishing preferences of user's own account. Returned as an additional entity when verifying and updated credentials, as an attribute of Account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**List[ModelField]**](ModelField.md) | Metadata about the account. | [optional] 
**follow_requests_count** | **int** | The number of pending follow requests | [optional] 
**language** | **str** | The default posting language for new statuses, ISO 639-1 language two-letter code. | [optional] 
**note** | **str** | Profile bio | [optional] 
**privacy** | **str** | The default post privacy to be used for new statuses. | [optional] 
**sensitive** | **bool** | Whether new statuses should be marked sensitive by default. | [optional] 

## Example

```python
from openapi_client.models.source import Source

# TODO update the JSON string below
json = "{}"
# create an instance of Source from a JSON string
source_instance = Source.from_json(json)
# print the JSON string representation of the object
print(Source.to_json())

# convert the object into a dict
source_dict = source_instance.to_dict()
# create an instance of Source from a dict
source_from_dict = Source.from_dict(source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


