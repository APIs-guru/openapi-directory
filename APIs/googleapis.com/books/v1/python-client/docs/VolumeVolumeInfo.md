# VolumeVolumeInfo

General volume information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_anon_logging** | **bool** | Whether anonymous logging should be allowed. | [optional] 
**authors** | **List[str]** | The names of the authors and/or editors for this volume. (In LITE projection) | [optional] 
**average_rating** | **float** | The mean review rating for this volume. (min &#x3D; 1.0, max &#x3D; 5.0) | [optional] 
**canonical_volume_link** | **str** | Canonical URL for a volume. (In LITE projection.) | [optional] 
**categories** | **List[str]** | A list of subject categories, such as \&quot;Fiction\&quot;, \&quot;Suspense\&quot;, etc. | [optional] 
**comics_content** | **bool** | Whether the volume has comics content. | [optional] 
**content_version** | **str** | An identifier for the version of the volume content (text &amp; images). (In LITE projection) | [optional] 
**description** | **str** | A synopsis of the volume. The text of the description is formatted in HTML and includes simple formatting elements, such as b, i, and br tags. (In LITE projection.) | [optional] 
**dimensions** | [**VolumeVolumeInfoDimensions**](VolumeVolumeInfoDimensions.md) |  | [optional] 
**image_links** | [**VolumeVolumeInfoImageLinks**](VolumeVolumeInfoImageLinks.md) |  | [optional] 
**industry_identifiers** | [**List[VolumeVolumeInfoIndustryIdentifiersInner]**](VolumeVolumeInfoIndustryIdentifiersInner.md) | Industry standard identifiers for this volume. | [optional] 
**info_link** | **str** | URL to view information about this volume on the Google Books site. (In LITE projection) | [optional] 
**language** | **str** | Best language for this volume (based on content). It is the two-letter ISO 639-1 code such as &#39;fr&#39;, &#39;en&#39;, etc. | [optional] 
**main_category** | **str** | The main category to which this volume belongs. It will be the category from the categories list returned below that has the highest weight. | [optional] 
**maturity_rating** | **str** |  | [optional] 
**page_count** | **int** | Total number of pages as per publisher metadata. | [optional] 
**panelization_summary** | [**VolumeVolumeInfoPanelizationSummary**](VolumeVolumeInfoPanelizationSummary.md) |  | [optional] 
**preview_link** | **str** | URL to preview this volume on the Google Books site. | [optional] 
**print_type** | **str** | Type of publication of this volume. Possible values are BOOK or MAGAZINE. | [optional] 
**printed_page_count** | **int** | Total number of printed pages in generated pdf representation. | [optional] 
**published_date** | **str** | Date of publication. (In LITE projection.) | [optional] 
**publisher** | **str** | Publisher of this volume. (In LITE projection.) | [optional] 
**ratings_count** | **int** | The number of review ratings for this volume. | [optional] 
**reading_modes** | [**VolumeVolumeInfoReadingModes**](VolumeVolumeInfoReadingModes.md) |  | [optional] 
**sample_page_count** | **int** | Total number of sample pages as per publisher metadata. | [optional] 
**series_info** | [**Volumeseriesinfo**](Volumeseriesinfo.md) |  | [optional] 
**subtitle** | **str** | Volume subtitle. (In LITE projection.) | [optional] 
**title** | **str** | Volume title. (In LITE projection.) | [optional] 

## Example

```python
from openapi_client.models.volume_volume_info import VolumeVolumeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeVolumeInfo from a JSON string
volume_volume_info_instance = VolumeVolumeInfo.from_json(json)
# print the JSON string representation of the object
print(VolumeVolumeInfo.to_json())

# convert the object into a dict
volume_volume_info_dict = volume_volume_info_instance.to_dict()
# create an instance of VolumeVolumeInfo from a dict
volume_volume_info_from_dict = VolumeVolumeInfo.from_dict(volume_volume_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


