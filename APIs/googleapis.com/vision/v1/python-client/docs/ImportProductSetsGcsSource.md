# ImportProductSetsGcsSource

The Google Cloud Storage location for a csv file which preserves a list of ImportProductSetRequests in each line.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**csv_file_uri** | **str** | The Google Cloud Storage URI of the input csv file. The URI must start with &#x60;gs://&#x60;. The format of the input csv file should be one image per line. In each line, there are 8 columns. 1. image-uri 2. image-id 3. product-set-id 4. product-id 5. product-category 6. product-display-name 7. labels 8. bounding-poly The &#x60;image-uri&#x60;, &#x60;product-set-id&#x60;, &#x60;product-id&#x60;, and &#x60;product-category&#x60; columns are required. All other columns are optional. If the &#x60;ProductSet&#x60; or &#x60;Product&#x60; specified by the &#x60;product-set-id&#x60; and &#x60;product-id&#x60; values does not exist, then the system will create a new &#x60;ProductSet&#x60; or &#x60;Product&#x60; for the image. In this case, the &#x60;product-display-name&#x60; column refers to display_name, the &#x60;product-category&#x60; column refers to product_category, and the &#x60;labels&#x60; column refers to product_labels. The &#x60;image-id&#x60; column is optional but must be unique if provided. If it is empty, the system will automatically assign a unique id to the image. The &#x60;product-display-name&#x60; column is optional. If it is empty, the system sets the display_name field for the product to a space (\&quot; \&quot;). You can update the &#x60;display_name&#x60; later by using the API. If a &#x60;Product&#x60; with the specified &#x60;product-id&#x60; already exists, then the system ignores the &#x60;product-display-name&#x60;, &#x60;product-category&#x60;, and &#x60;labels&#x60; columns. The &#x60;labels&#x60; column (optional) is a line containing a list of comma-separated key-value pairs, in the following format: \&quot;key_1&#x3D;value_1,key_2&#x3D;value_2,...,key_n&#x3D;value_n\&quot; The &#x60;bounding-poly&#x60; column (optional) identifies one region of interest from the image in the same manner as &#x60;CreateReferenceImage&#x60;. If you do not specify the &#x60;bounding-poly&#x60; column, then the system will try to detect regions of interest automatically. At most one &#x60;bounding-poly&#x60; column is allowed per line. If the image contains multiple regions of interest, add a line to the CSV file that includes the same product information, and the &#x60;bounding-poly&#x60; values for each region of interest. The &#x60;bounding-poly&#x60; column must contain an even number of comma-separated numbers, in the format \&quot;p1_x,p1_y,p2_x,p2_y,...,pn_x,pn_y\&quot;. Use non-negative integers for absolute bounding polygons, and float values in [0, 1] for normalized bounding polygons. The system will resize the image if the image resolution is too large to process (larger than 20MP). | [optional] 

## Example

```python
from openapi_client.models.import_product_sets_gcs_source import ImportProductSetsGcsSource

# TODO update the JSON string below
json = "{}"
# create an instance of ImportProductSetsGcsSource from a JSON string
import_product_sets_gcs_source_instance = ImportProductSetsGcsSource.from_json(json)
# print the JSON string representation of the object
print(ImportProductSetsGcsSource.to_json())

# convert the object into a dict
import_product_sets_gcs_source_dict = import_product_sets_gcs_source_instance.to_dict()
# create an instance of ImportProductSetsGcsSource from a dict
import_product_sets_gcs_source_from_dict = ImportProductSetsGcsSource.from_dict(import_product_sets_gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


