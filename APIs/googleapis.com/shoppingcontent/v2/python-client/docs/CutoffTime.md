# CutoffTime


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hour** | **int** | Hour of the cutoff time until which an order has to be placed to be processed in the same day. Required. | [optional] 
**minute** | **int** | Minute of the cutoff time until which an order has to be placed to be processed in the same day. Required. | [optional] 
**timezone** | **str** | Timezone identifier for the cutoff time. A list of identifiers can be found in the AdWords API documentation. E.g. \&quot;Europe/Zurich\&quot;. Required. | [optional] 

## Example

```python
from openapi_client.models.cutoff_time import CutoffTime

# TODO update the JSON string below
json = "{}"
# create an instance of CutoffTime from a JSON string
cutoff_time_instance = CutoffTime.from_json(json)
# print the JSON string representation of the object
print(CutoffTime.to_json())

# convert the object into a dict
cutoff_time_dict = cutoff_time_instance.to_dict()
# create an instance of CutoffTime from a dict
cutoff_time_from_dict = CutoffTime.from_dict(cutoff_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


