# Domains2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domains** | [**List[Domains]**](Domains.md) | A list of domain objects. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**kind** | **str** | Kind of resource this is. | [optional] [default to 'admin#directory#domains']

## Example

```python
from openapi_client.models.domains2 import Domains2

# TODO update the JSON string below
json = "{}"
# create an instance of Domains2 from a JSON string
domains2_instance = Domains2.from_json(json)
# print the JSON string representation of the object
print(Domains2.to_json())

# convert the object into a dict
domains2_dict = domains2_instance.to_dict()
# create an instance of Domains2 from a dict
domains2_from_dict = Domains2.from_dict(domains2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


