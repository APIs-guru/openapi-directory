# TemplateListingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templates_api** | [**List[TemplateRecordResponse]**](TemplateRecordResponse.md) | Basic information for each Template returned from the query. | [optional] 
**total_count** | **float** | The total number of Templates API associated with this server. | [optional] 

## Example

```python
from openapi_client.models.template_listing_response import TemplateListingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateListingResponse from a JSON string
template_listing_response_instance = TemplateListingResponse.from_json(json)
# print the JSON string representation of the object
print(TemplateListingResponse.to_json())

# convert the object into a dict
template_listing_response_dict = template_listing_response_instance.to_dict()
# create an instance of TemplateListingResponse from a dict
template_listing_response_from_dict = TemplateListingResponse.from_dict(template_listing_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


