# ApplicationSecret1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | The application secrets&#39; created | [optional] 
**name** | **str** | The application secrets&#39; name | [optional] 
**value** | **str** | The application secrets&#39; value | [optional] 

## Example

```python
from openapi_client.models.application_secret1 import ApplicationSecret1

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationSecret1 from a JSON string
application_secret1_instance = ApplicationSecret1.from_json(json)
# print the JSON string representation of the object
print(ApplicationSecret1.to_json())

# convert the object into a dict
application_secret1_dict = application_secret1_instance.to_dict()
# create an instance of ApplicationSecret1 from a dict
application_secret1_from_dict = ApplicationSecret1.from_dict(application_secret1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


