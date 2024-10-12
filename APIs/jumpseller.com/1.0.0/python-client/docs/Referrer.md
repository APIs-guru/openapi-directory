# Referrer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**source** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.referrer import Referrer

# TODO update the JSON string below
json = "{}"
# create an instance of Referrer from a JSON string
referrer_instance = Referrer.from_json(json)
# print the JSON string representation of the object
print(Referrer.to_json())

# convert the object into a dict
referrer_dict = referrer_instance.to_dict()
# create an instance of Referrer from a dict
referrer_from_dict = Referrer.from_dict(referrer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


