# CVSS

CVSS details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base** | **float** | CVSS base | [optional] [readonly] 

## Example

```python
from openapi_client.models.cvss import CVSS

# TODO update the JSON string below
json = "{}"
# create an instance of CVSS from a JSON string
cvss_instance = CVSS.from_json(json)
# print the JSON string representation of the object
print(CVSS.to_json())

# convert the object into a dict
cvss_dict = cvss_instance.to_dict()
# create an instance of CVSS from a dict
cvss_from_dict = CVSS.from_dict(cvss_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


