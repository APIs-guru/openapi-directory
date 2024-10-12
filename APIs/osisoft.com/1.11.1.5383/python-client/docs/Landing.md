# Landing


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LandingLinks**](LandingLinks.md) |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.landing import Landing

# TODO update the JSON string below
json = "{}"
# create an instance of Landing from a JSON string
landing_instance = Landing.from_json(json)
# print the JSON string representation of the object
print(Landing.to_json())

# convert the object into a dict
landing_dict = landing_instance.to_dict()
# create an instance of Landing from a dict
landing_from_dict = Landing.from_dict(landing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


