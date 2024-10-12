# Application

Represents an application associated with a finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_uri** | **str** | The base URI that identifies the network location of the application in which the vulnerability was detected. For example, &#x60;http://example.com&#x60;. | [optional] 
**full_uri** | **str** | The full URI with payload that can be used to reproduce the vulnerability. For example, &#x60;http://example.com?p&#x3D;aMmYgI6H&#x60;. | [optional] 

## Example

```python
from openapi_client.models.application import Application

# TODO update the JSON string below
json = "{}"
# create an instance of Application from a JSON string
application_instance = Application.from_json(json)
# print the JSON string representation of the object
print(Application.to_json())

# convert the object into a dict
application_dict = application_instance.to_dict()
# create an instance of Application from a dict
application_from_dict = Application.from_dict(application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


