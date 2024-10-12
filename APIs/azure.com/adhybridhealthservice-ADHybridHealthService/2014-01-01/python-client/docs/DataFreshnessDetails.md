# DataFreshnessDetails

The data freshness details for the server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Item]**](Item.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.data_freshness_details import DataFreshnessDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DataFreshnessDetails from a JSON string
data_freshness_details_instance = DataFreshnessDetails.from_json(json)
# print the JSON string representation of the object
print(DataFreshnessDetails.to_json())

# convert the object into a dict
data_freshness_details_dict = data_freshness_details_instance.to_dict()
# create an instance of DataFreshnessDetails from a dict
data_freshness_details_from_dict = DataFreshnessDetails.from_dict(data_freshness_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


