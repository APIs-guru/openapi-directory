# LighthouseResultV5

The Lighthouse result object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audits** | [**Dict[str, LighthouseAuditResultV5]**](LighthouseAuditResultV5.md) | Map of audits in the LHR. | [optional] 
**categories** | [**Categories**](Categories.md) |  | [optional] 
**category_groups** | [**Dict[str, CategoryGroupV5]**](CategoryGroupV5.md) | Map of category groups in the LHR. | [optional] 
**config_settings** | [**ConfigSettings**](ConfigSettings.md) |  | [optional] 
**entities** | [**List[LhrEntity]**](LhrEntity.md) | Entity classification data. | [optional] 
**environment** | [**Environment**](Environment.md) |  | [optional] 
**fetch_time** | **str** | The time that this run was fetched. | [optional] 
**final_displayed_url** | **str** | URL displayed on the page after Lighthouse finishes. | [optional] 
**final_url** | **str** | The final resolved url that was audited. | [optional] 
**full_page_screenshot** | **object** | Screenshot data of the full page, along with node rects relevant to the audit results. | [optional] 
**i18n** | [**I18n**](I18n.md) |  | [optional] 
**lighthouse_version** | **str** | The lighthouse version that was used to generate this LHR. | [optional] 
**main_document_url** | **str** | URL of the main document request of the final navigation. | [optional] 
**requested_url** | **str** | The original requested url. | [optional] 
**run_warnings** | **List[object]** | List of all run warnings in the LHR. Will always output to at least &#x60;[]&#x60;. | [optional] 
**runtime_error** | [**RuntimeError**](RuntimeError.md) |  | [optional] 
**stack_packs** | [**List[StackPack]**](StackPack.md) | The Stack Pack advice strings. | [optional] 
**timing** | [**Timing**](Timing.md) |  | [optional] 
**user_agent** | **str** | The user agent that was used to run this LHR. | [optional] 

## Example

```python
from openapi_client.models.lighthouse_result_v5 import LighthouseResultV5

# TODO update the JSON string below
json = "{}"
# create an instance of LighthouseResultV5 from a JSON string
lighthouse_result_v5_instance = LighthouseResultV5.from_json(json)
# print the JSON string representation of the object
print(LighthouseResultV5.to_json())

# convert the object into a dict
lighthouse_result_v5_dict = lighthouse_result_v5_instance.to_dict()
# create an instance of LighthouseResultV5 from a dict
lighthouse_result_v5_from_dict = LighthouseResultV5.from_dict(lighthouse_result_v5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


