# NUMBERINSIGHT

Number Insight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | Network used to send the request. | [optional] 
**number** | **str** | Search only request for the target number. | [optional] 
**product** | [**ProductNi**](ProductNi.md) |  | [optional] 

## Example

```python
from openapi_client.models.numberinsight import NUMBERINSIGHT

# TODO update the JSON string below
json = "{}"
# create an instance of NUMBERINSIGHT from a JSON string
numberinsight_instance = NUMBERINSIGHT.from_json(json)
# print the JSON string representation of the object
print(NUMBERINSIGHT.to_json())

# convert the object into a dict
numberinsight_dict = numberinsight_instance.to_dict()
# create an instance of NUMBERINSIGHT from a dict
numberinsight_from_dict = NUMBERINSIGHT.from_dict(numberinsight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


