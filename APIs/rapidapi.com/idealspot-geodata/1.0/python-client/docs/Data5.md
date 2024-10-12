# Data5


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **List[List[int]]** |  | 
**metadata** | [**Metadata1**](Metadata1.md) |  | 
**roadsegment** | [**Roadsegment**](Roadsegment.md) |  | 
**stats** | [**Stats**](Stats.md) |  | 

## Example

```python
from openapi_client.models.data5 import Data5

# TODO update the JSON string below
json = "{}"
# create an instance of Data5 from a JSON string
data5_instance = Data5.from_json(json)
# print the JSON string representation of the object
print(Data5.to_json())

# convert the object into a dict
data5_dict = data5_instance.to_dict()
# create an instance of Data5 from a dict
data5_from_dict = Data5.from_dict(data5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


