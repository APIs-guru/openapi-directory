# BuildsDistribute200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Status of the Request | [optional] 
**upload_id** | **str** | A unique ID of the upload | [optional] 

## Example

```python
from openapi_client.models.builds_distribute200_response import BuildsDistribute200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BuildsDistribute200Response from a JSON string
builds_distribute200_response_instance = BuildsDistribute200Response.from_json(json)
# print the JSON string representation of the object
print(BuildsDistribute200Response.to_json())

# convert the object into a dict
builds_distribute200_response_dict = builds_distribute200_response_instance.to_dict()
# create an instance of BuildsDistribute200Response from a dict
builds_distribute200_response_from_dict = BuildsDistribute200Response.from_dict(builds_distribute200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


