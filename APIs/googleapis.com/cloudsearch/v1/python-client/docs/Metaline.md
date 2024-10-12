# Metaline

A metaline is a list of properties that are displayed along with the search result to provide context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**List[DisplayedProperty]**](DisplayedProperty.md) | The list of displayed properties for the metaline. The maximum number of properties is 5. | [optional] 

## Example

```python
from openapi_client.models.metaline import Metaline

# TODO update the JSON string below
json = "{}"
# create an instance of Metaline from a JSON string
metaline_instance = Metaline.from_json(json)
# print the JSON string representation of the object
print(Metaline.to_json())

# convert the object into a dict
metaline_dict = metaline_instance.to_dict()
# create an instance of Metaline from a dict
metaline_from_dict = Metaline.from_dict(metaline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


