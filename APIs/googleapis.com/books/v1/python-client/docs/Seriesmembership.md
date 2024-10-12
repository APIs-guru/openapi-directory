# Seriesmembership


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Resorce type. | [optional] 
**member** | [**List[Volume]**](Volume.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.seriesmembership import Seriesmembership

# TODO update the JSON string below
json = "{}"
# create an instance of Seriesmembership from a JSON string
seriesmembership_instance = Seriesmembership.from_json(json)
# print the JSON string representation of the object
print(Seriesmembership.to_json())

# convert the object into a dict
seriesmembership_dict = seriesmembership_instance.to_dict()
# create an instance of Seriesmembership from a dict
seriesmembership_from_dict = Seriesmembership.from_dict(seriesmembership_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


