# Adjustment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** |  | [optional] 
**approval** | **float** |  | [optional] 
**created** | **str** | The date it was created &#39;2015-04-22T10:03:19.323-07:00&#39; | [optional] 
**id** | **float** |  | [optional] 
**message** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.adjustment import Adjustment

# TODO update the JSON string below
json = "{}"
# create an instance of Adjustment from a JSON string
adjustment_instance = Adjustment.from_json(json)
# print the JSON string representation of the object
print(Adjustment.to_json())

# convert the object into a dict
adjustment_dict = adjustment_instance.to_dict()
# create an instance of Adjustment from a dict
adjustment_from_dict = Adjustment.from_dict(adjustment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


