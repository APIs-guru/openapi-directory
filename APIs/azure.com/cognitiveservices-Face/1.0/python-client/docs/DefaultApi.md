# openapi_client.DefaultApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**face_detect_with_url**](DefaultApi.md#face_detect_with_url) | **POST** /detect | 
[**face_find_similar**](DefaultApi.md#face_find_similar) | **POST** /findsimilars | 
[**face_group**](DefaultApi.md#face_group) | **POST** /group | 
[**face_identify**](DefaultApi.md#face_identify) | **POST** /identify | 
[**face_list_add_face_from_url**](DefaultApi.md#face_list_add_face_from_url) | **POST** /facelists/{faceListId}/persistedfaces | 
[**face_list_create**](DefaultApi.md#face_list_create) | **PUT** /facelists/{faceListId} | 
[**face_list_delete**](DefaultApi.md#face_list_delete) | **DELETE** /facelists/{faceListId} | 
[**face_list_delete_face**](DefaultApi.md#face_list_delete_face) | **DELETE** /facelists/{faceListId}/persistedfaces/{persistedFaceId} | 
[**face_list_get**](DefaultApi.md#face_list_get) | **GET** /facelists/{faceListId} | 
[**face_list_list**](DefaultApi.md#face_list_list) | **GET** /facelists | 
[**face_list_update**](DefaultApi.md#face_list_update) | **PATCH** /facelists/{faceListId} | 
[**face_verify_face_to_face**](DefaultApi.md#face_verify_face_to_face) | **POST** /verify | 
[**large_face_list_add_face_from_url**](DefaultApi.md#large_face_list_add_face_from_url) | **POST** /largefacelists/{largeFaceListId}/persistedfaces | 
[**large_face_list_create**](DefaultApi.md#large_face_list_create) | **PUT** /largefacelists/{largeFaceListId} | 
[**large_face_list_delete**](DefaultApi.md#large_face_list_delete) | **DELETE** /largefacelists/{largeFaceListId} | 
[**large_face_list_delete_face**](DefaultApi.md#large_face_list_delete_face) | **DELETE** /largefacelists/{largeFaceListId}/persistedfaces/{persistedFaceId} | 
[**large_face_list_get**](DefaultApi.md#large_face_list_get) | **GET** /largefacelists/{largeFaceListId} | 
[**large_face_list_get_face**](DefaultApi.md#large_face_list_get_face) | **GET** /largefacelists/{largeFaceListId}/persistedfaces/{persistedFaceId} | 
[**large_face_list_get_training_status**](DefaultApi.md#large_face_list_get_training_status) | **GET** /largefacelists/{largeFaceListId}/training | 
[**large_face_list_list**](DefaultApi.md#large_face_list_list) | **GET** /largefacelists | 
[**large_face_list_list_faces**](DefaultApi.md#large_face_list_list_faces) | **GET** /largefacelists/{largeFaceListId}/persistedfaces | 
[**large_face_list_train**](DefaultApi.md#large_face_list_train) | **POST** /largefacelists/{largeFaceListId}/train | 
[**large_face_list_update**](DefaultApi.md#large_face_list_update) | **PATCH** /largefacelists/{largeFaceListId} | 
[**large_face_list_update_face**](DefaultApi.md#large_face_list_update_face) | **PATCH** /largefacelists/{largeFaceListId}/persistedfaces/{persistedFaceId} | 
[**large_person_group_create**](DefaultApi.md#large_person_group_create) | **PUT** /largepersongroups/{largePersonGroupId} | 
[**large_person_group_delete**](DefaultApi.md#large_person_group_delete) | **DELETE** /largepersongroups/{largePersonGroupId} | 
[**large_person_group_get**](DefaultApi.md#large_person_group_get) | **GET** /largepersongroups/{largePersonGroupId} | 
[**large_person_group_get_training_status**](DefaultApi.md#large_person_group_get_training_status) | **GET** /largepersongroups/{largePersonGroupId}/training | 
[**large_person_group_list**](DefaultApi.md#large_person_group_list) | **GET** /largepersongroups | 
[**large_person_group_person_add_face_from_url**](DefaultApi.md#large_person_group_person_add_face_from_url) | **POST** /largepersongroups/{largePersonGroupId}/persons/{personId}/persistedfaces | 
[**large_person_group_person_create**](DefaultApi.md#large_person_group_person_create) | **POST** /largepersongroups/{largePersonGroupId}/persons | 
[**large_person_group_person_delete**](DefaultApi.md#large_person_group_person_delete) | **DELETE** /largepersongroups/{largePersonGroupId}/persons/{personId} | 
[**large_person_group_person_delete_face**](DefaultApi.md#large_person_group_person_delete_face) | **DELETE** /largepersongroups/{largePersonGroupId}/persons/{personId}/persistedfaces/{persistedFaceId} | 
[**large_person_group_person_get**](DefaultApi.md#large_person_group_person_get) | **GET** /largepersongroups/{largePersonGroupId}/persons/{personId} | 
[**large_person_group_person_get_face**](DefaultApi.md#large_person_group_person_get_face) | **GET** /largepersongroups/{largePersonGroupId}/persons/{personId}/persistedfaces/{persistedFaceId} | 
[**large_person_group_person_list**](DefaultApi.md#large_person_group_person_list) | **GET** /largepersongroups/{largePersonGroupId}/persons | 
[**large_person_group_person_update**](DefaultApi.md#large_person_group_person_update) | **PATCH** /largepersongroups/{largePersonGroupId}/persons/{personId} | 
[**large_person_group_person_update_face**](DefaultApi.md#large_person_group_person_update_face) | **PATCH** /largepersongroups/{largePersonGroupId}/persons/{personId}/persistedfaces/{persistedFaceId} | 
[**large_person_group_train**](DefaultApi.md#large_person_group_train) | **POST** /largepersongroups/{largePersonGroupId}/train | 
[**large_person_group_update**](DefaultApi.md#large_person_group_update) | **PATCH** /largepersongroups/{largePersonGroupId} | 
[**person_group_create**](DefaultApi.md#person_group_create) | **PUT** /persongroups/{personGroupId} | 
[**person_group_delete**](DefaultApi.md#person_group_delete) | **DELETE** /persongroups/{personGroupId} | 
[**person_group_get**](DefaultApi.md#person_group_get) | **GET** /persongroups/{personGroupId} | 
[**person_group_get_training_status**](DefaultApi.md#person_group_get_training_status) | **GET** /persongroups/{personGroupId}/training | 
[**person_group_list**](DefaultApi.md#person_group_list) | **GET** /persongroups | 
[**person_group_person_add_face_from_url**](DefaultApi.md#person_group_person_add_face_from_url) | **POST** /persongroups/{personGroupId}/persons/{personId}/persistedfaces | 
[**person_group_person_create**](DefaultApi.md#person_group_person_create) | **POST** /persongroups/{personGroupId}/persons | 
[**person_group_person_delete**](DefaultApi.md#person_group_person_delete) | **DELETE** /persongroups/{personGroupId}/persons/{personId} | 
[**person_group_person_delete_face**](DefaultApi.md#person_group_person_delete_face) | **DELETE** /persongroups/{personGroupId}/persons/{personId}/persistedfaces/{persistedFaceId} | 
[**person_group_person_get**](DefaultApi.md#person_group_person_get) | **GET** /persongroups/{personGroupId}/persons/{personId} | 
[**person_group_person_get_face**](DefaultApi.md#person_group_person_get_face) | **GET** /persongroups/{personGroupId}/persons/{personId}/persistedfaces/{persistedFaceId} | 
[**person_group_person_list**](DefaultApi.md#person_group_person_list) | **GET** /persongroups/{personGroupId}/persons | 
[**person_group_person_update**](DefaultApi.md#person_group_person_update) | **PATCH** /persongroups/{personGroupId}/persons/{personId} | 
[**person_group_person_update_face**](DefaultApi.md#person_group_person_update_face) | **PATCH** /persongroups/{personGroupId}/persons/{personId}/persistedfaces/{persistedFaceId} | 
[**person_group_train**](DefaultApi.md#person_group_train) | **POST** /persongroups/{personGroupId}/train | 
[**person_group_update**](DefaultApi.md#person_group_update) | **PATCH** /persongroups/{personGroupId} | 
[**snapshot_apply**](DefaultApi.md#snapshot_apply) | **POST** /snapshots/{snapshotId}/apply | 
[**snapshot_delete**](DefaultApi.md#snapshot_delete) | **DELETE** /snapshots/{snapshotId} | 
[**snapshot_get**](DefaultApi.md#snapshot_get) | **GET** /snapshots/{snapshotId} | 
[**snapshot_get_operation_status**](DefaultApi.md#snapshot_get_operation_status) | **GET** /operations/{operationId} | 
[**snapshot_list**](DefaultApi.md#snapshot_list) | **GET** /snapshots | 
[**snapshot_take**](DefaultApi.md#snapshot_take) | **POST** /snapshots | 
[**snapshot_update**](DefaultApi.md#snapshot_update) | **PATCH** /snapshots/{snapshotId} | 


# **face_detect_with_url**
> List[DetectedFace] face_detect_with_url(image_url, return_face_id=return_face_id, return_face_landmarks=return_face_landmarks, return_face_attributes=return_face_attributes, recognition_model=recognition_model, return_recognition_model=return_recognition_model, detection_model=detection_model)



Detect human faces in an image, return face rectangles, and optionally with faceIds, landmarks, and attributes.<br /> * No image will be stored. Only the extracted face feature will be stored on server. The faceId is an identifier of the face feature and will be used in [Face - Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239), [Face - Verify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a), and [Face - Find Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237). The stored face feature(s) will expire and be deleted 24 hours after the original detection call. * Optional parameters include faceId, landmarks, and attributes. Attributes include age, gender, headPose, smile, facialHair, glasses, emotion, hair, makeup, occlusion, accessories, blur, exposure and noise. Some of the results returned for specific attributes may not be highly accurate. * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB. * Up to 100 faces can be returned for an image. Faces are ranked by face rectangle size from large to small. * For optimal results when querying [Face - Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239), [Face - Verify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a), and [Face - Find Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237) ('returnFaceId' is true), please use faces that are: frontal, clear, and with a minimum size of 200x200 pixels (100 pixels between eyes). * The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels. Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum face size. * Different 'detectionModel' values can be provided. To use and compare different detection models, please refer to [How to specify a detection model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)   | Model | Recommended use-case(s) |   | ---------- | -------- |   | 'detection_01': | The default detection model for [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236). Recommend for near frontal face detection. For scenarios with exceptionally large angle (head-pose) faces, occluded faces or wrong image orientation, the faces in such cases may not be detected. |   | 'detection_02': | Detection model released in 2019 May with improved accuracy especially on small, side and blurry faces. |  * Different 'recognitionModel' values are provided. If follow-up operations like Verify, Identify, Find Similar are needed, please specify the recognition model with 'recognitionModel' parameter. The default value for 'recognitionModel' is 'recognition_01', if latest model needed, please explicitly specify the model you need in this parameter. Once specified, the detected faceIds will be associated with the specified recognition model. More details, please refer to [How to specify a recognition model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-recognition-model)   | Model | Recommended use-case(s) |   | ---------- | -------- |   | 'recognition_01': | The default recognition model for [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236). All those faceIds created before 2019 March are bonded with this recognition model. |   | 'recognition_02': | Recognition model released in 2019 March. 'recognition_02' is recommended since its overall accuracy is improved compared with 'recognition_01'. |

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.detected_face import DetectedFace
from openapi_client.models.face_detect_with_url_request import FaceDetectWithUrlRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    image_url = openapi_client.FaceDetectWithUrlRequest() # FaceDetectWithUrlRequest | A JSON document with a URL pointing to the image that is to be analyzed.
    return_face_id = True # bool | A value indicating whether the operation should return faceIds of detected faces. (optional) (default to True)
    return_face_landmarks = False # bool | A value indicating whether the operation should return landmarks of the detected faces. (optional) (default to False)
    return_face_attributes = ['return_face_attributes_example'] # List[str] | Analyze and return the one or more specified face attributes in the comma-separated string like \"returnFaceAttributes=age,gender\". Supported face attributes include age, gender, headPose, smile, facialHair, glasses and emotion. Note that each face attribute analysis has additional computational and time cost. (optional)
    recognition_model = recognition_01 # str | Name of recognition model. Recognition model is used when the face features are extracted and associated with detected faceIds, (Large)FaceList or (Large)PersonGroup. A recognition model name can be provided when performing Face - Detect or (Large)FaceList - Create or (Large)PersonGroup - Create. The default value is 'recognition_01', if latest model needed, please explicitly specify the model you need. (optional) (default to recognition_01)
    return_recognition_model = False # bool | A value indicating whether the operation should return 'recognitionModel' in response. (optional) (default to False)
    detection_model = detection_01 # str | Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is 'detection_01', if another model is needed, please explicitly specify it. (optional) (default to detection_01)

    try:
        api_response = api_instance.face_detect_with_url(image_url, return_face_id=return_face_id, return_face_landmarks=return_face_landmarks, return_face_attributes=return_face_attributes, recognition_model=recognition_model, return_recognition_model=return_recognition_model, detection_model=detection_model)
        print("The response of DefaultApi->face_detect_with_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->face_detect_with_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_url** | [**FaceDetectWithUrlRequest**](FaceDetectWithUrlRequest.md)| A JSON document with a URL pointing to the image that is to be analyzed. | 
 **return_face_id** | **bool**| A value indicating whether the operation should return faceIds of detected faces. | [optional] [default to True]
 **return_face_landmarks** | **bool**| A value indicating whether the operation should return landmarks of the detected faces. | [optional] [default to False]
 **return_face_attributes** | [**List[str]**](str.md)| Analyze and return the one or more specified face attributes in the comma-separated string like \&quot;returnFaceAttributes&#x3D;age,gender\&quot;. Supported face attributes include age, gender, headPose, smile, facialHair, glasses and emotion. Note that each face attribute analysis has additional computational and time cost. | [optional] 
 **recognition_model** | **str**| Name of recognition model. Recognition model is used when the face features are extracted and associated with detected faceIds, (Large)FaceList or (Large)PersonGroup. A recognition model name can be provided when performing Face - Detect or (Large)FaceList - Create or (Large)PersonGroup - Create. The default value is &#39;recognition_01&#39;, if latest model needed, please explicitly specify the model you need. | [optional] [default to recognition_01]
 **return_recognition_model** | **bool**| A value indicating whether the operation should return &#39;recognitionModel&#39; in response. | [optional] [default to False]
 **detection_model** | **str**| Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is &#39;detection_01&#39;, if another model is needed, please explicitly specify it. | [optional] [default to detection_01]

### Return type

[**List[DetectedFace]**](DetectedFace.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an array of face entries ranked by face rectangle size in descending order. An empty response indicates no faces detected. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **face_find_similar**
> List[SimilarFace] face_find_similar(body)



Given query face's faceId, to search the similar-looking faces from a faceId array, a face list or a large face list. faceId array contains the faces created by [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), which will expire 24 hours after creation. A \"faceListId\" is created by [FaceList - Create](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524b) containing persistedFaceIds that will not expire. And a \"largeFaceListId\" is created by [LargeFaceList - Create](/docs/services/563879b61984550e40cbbe8d/operations/5a157b68d2de3616c086f2cc) containing persistedFaceIds that will also not expire. Depending on the input the returned similar faces list contains faceIds or persistedFaceIds ranked by similarity. <br/>Find similar has two working modes, \"matchPerson\" and \"matchFace\". \"matchPerson\" is the default mode that it tries to find faces of the same person as possible by using internal same-person thresholds. It is useful to find a known person's other photos. Note that an empty list will be returned if no faces pass the internal thresholds. \"matchFace\" mode ignores same-person thresholds and returns ranked similar faces anyway, even the similarity is low. It can be used in the cases like searching celebrity-looking faces. <br/>The 'recognitionModel' associated with the query face's faceId should be the same as the 'recognitionModel' used by the target faceId array, face list or large face list. 

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.find_similar_request import FindSimilarRequest
from openapi_client.models.similar_face import SimilarFace
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = openapi_client.FindSimilarRequest() # FindSimilarRequest | Request body for Find Similar.

    try:
        api_response = api_instance.face_find_similar(body)
        print("The response of DefaultApi->face_find_similar:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->face_find_similar: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FindSimilarRequest**](FindSimilarRequest.md)| Request body for Find Similar. | 

### Return type

[**List[SimilarFace]**](SimilarFace.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an array of the most similar faces represented in faceId if the input parameter is faceIds or persistedFaceId if the input parameter is faceListId. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **face_group**
> GroupResult face_group(body)



Divide candidate faces into groups based on face similarity.<br /> * The output is one or more disjointed face groups and a messyGroup. A face group contains faces that have similar looking, often of the same person. Face groups are ranked by group size, i.e. number of faces. Notice that faces belonging to a same person might be split into several groups in the result. * MessyGroup is a special face group containing faces that cannot find any similar counterpart face from original faces. The messyGroup will not appear in the result if all faces found their counterparts. * Group API needs at least 2 candidate faces and 1000 at most. We suggest to try [Face - Verify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a) when you only have 2 candidate faces. * The 'recognitionModel' associated with the query faces' faceIds should be the same. 

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.group_request import GroupRequest
from openapi_client.models.group_result import GroupResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = openapi_client.GroupRequest() # GroupRequest | Request body for grouping.

    try:
        api_response = api_instance.face_group(body)
        print("The response of DefaultApi->face_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->face_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GroupRequest**](GroupRequest.md)| Request body for grouping. | 

### Return type

[**GroupResult**](GroupResult.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns one or more groups of similar faces (rank by group size) and a messyGroup. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **face_identify**
> List[IdentifyResult] face_identify(body)



1-to-many identification to find the closest matches of the specific query person face from a person group or large person group. <br/> For each face in the faceIds array, Face Identify will compute similarities between the query face and all the faces in the person group (given by personGroupId) or large person group (given by largePersonGroupId), and return candidate person(s) for that face ranked by similarity confidence. The person group/large person group should be trained to make it ready for identification. See more in [PersonGroup - Train](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395249) and [LargePersonGroup - Train](/docs/services/563879b61984550e40cbbe8d/operations/599ae2d16ac60f11b48b5aa4). <br/>   Remarks:<br /> * The algorithm allows more than one face to be identified independently at the same request, but no more than 10 faces. * Each person in the person group/large person group could have more than one face, but no more than 248 faces. * Higher face image quality means better identification precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger. * Number of candidates returned is restricted by maxNumOfCandidatesReturned and confidenceThreshold. If no person is identified, the returned candidates will be an empty array. * Try [Face - Find Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237) when you need to find similar faces from a face list/large face list instead of a person group/large person group. * The 'recognitionModel' associated with the query faces' faceIds should be the same as the 'recognitionModel' used by the target person group or large person group. 

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.identify_request import IdentifyRequest
from openapi_client.models.identify_result import IdentifyResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = openapi_client.IdentifyRequest() # IdentifyRequest | Request body for identify operation.

    try:
        api_response = api_instance.face_identify(body)
        print("The response of DefaultApi->face_identify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->face_identify: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IdentifyRequest**](IdentifyRequest.md)| Request body for identify operation. | 

### Return type

[**List[IdentifyResult]**](IdentifyResult.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns the identified candidate person(s) for each query face. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **face_list_add_face_from_url**
> PersistedFace face_list_add_face_from_url(face_list_id, image_url, user_data=user_data, target_face=target_face, detection_model=detection_model)



Add a face to a specified face list, up to 1,000 faces. <br /> To deal with an image contains multiple faces, input face can be specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face. No image will be stored. Only the extracted face feature will be stored on server until [FaceList - Delete Face](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395251) or [FaceList - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524f) is called. <br /> Note persistedFaceId is different from faceId generated by [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236). * Higher face image quality means better detection and recognition precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger. * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB. * \"targetFace\" rectangle should contain one face. Zero or multiple faces will be regarded as an error. If the provided \"targetFace\" rectangle is not returned from [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), there’s no guarantee to detect and add the face successfully. * Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions will cause failures. * Adding/deleting faces to/from a same face list are processed sequentially and to/from different face lists are in parallel. * The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels. Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum face size. * Different 'detectionModel' values can be provided. To use and compare different detection models, please refer to [How to specify a detection model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)   | Model | Recommended use-case(s) |   | ---------- | -------- |   | 'detection_01': | The default detection model for [FaceList - Add Face](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395250). Recommend for near frontal face detection. For scenarios with exceptionally large angle (head-pose) faces, occluded faces or wrong image orientation, the faces in such cases may not be detected. |   | 'detection_02': | Detection model released in 2019 May with improved accuracy especially on small, side and blurry faces. |

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.face_detect_with_url_request import FaceDetectWithUrlRequest
from openapi_client.models.persisted_face import PersistedFace
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    face_list_id = 'face_list_id_example' # str | Id referencing a particular face list.
    image_url = openapi_client.FaceDetectWithUrlRequest() # FaceDetectWithUrlRequest | A JSON document with a URL pointing to the image that is to be analyzed.
    user_data = 'user_data_example' # str | User-specified data about the face for any purpose. The maximum length is 1KB. (optional)
    target_face = [56] # List[int] | A face rectangle to specify the target face to be added to a person in the format of \"targetFace=left,top,width,height\". E.g. \"targetFace=10,10,100,100\". If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image. (optional)
    detection_model = detection_01 # str | Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is 'detection_01', if another model is needed, please explicitly specify it. (optional) (default to detection_01)

    try:
        api_response = api_instance.face_list_add_face_from_url(face_list_id, image_url, user_data=user_data, target_face=target_face, detection_model=detection_model)
        print("The response of DefaultApi->face_list_add_face_from_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->face_list_add_face_from_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **face_list_id** | **str**| Id referencing a particular face list. | 
 **image_url** | [**FaceDetectWithUrlRequest**](FaceDetectWithUrlRequest.md)| A JSON document with a URL pointing to the image that is to be analyzed. | 
 **user_data** | **str**| User-specified data about the face for any purpose. The maximum length is 1KB. | [optional] 
 **target_face** | [**List[int]**](int.md)| A face rectangle to specify the target face to be added to a person in the format of \&quot;targetFace&#x3D;left,top,width,height\&quot;. E.g. \&quot;targetFace&#x3D;10,10,100,100\&quot;. If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image. | [optional] 
 **detection_model** | **str**| Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is &#39;detection_01&#39;, if another model is needed, please explicitly specify it. | [optional] [default to detection_01]

### Return type

[**PersistedFace**](PersistedFace.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns a new persistedFaceId. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **face_list_create**
> face_list_create(face_list_id, body)



Create an empty face list with user-specified faceListId, name, an optional userData and recognitionModel. Up to 64 face lists are allowed in one subscription. <br /> Face list is a list of faces, up to 1,000 faces, and used by [Face - Find Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237). <br /> After creation, user should use [FaceList - Add Face](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395250) to import the faces. No image will be stored. Only the extracted face features are stored on server until [FaceList - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524f) is called. <br /> Find Similar is used for scenario like finding celebrity-like faces, similar face filtering, or as a light way face identification. But if the actual use is to identify person, please use [PersonGroup](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395244) / [LargePersonGroup](/docs/services/563879b61984550e40cbbe8d/operations/599acdee6ac60f11b48b5a9d) and [Face - Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239). <br /> Please consider [LargeFaceList](/docs/services/563879b61984550e40cbbe8d/operations/5a157b68d2de3616c086f2cc) when the face number is large. It can support up to 1,000,000 faces. <br />'recognitionModel' should be specified to associate with this face list. The default value for 'recognitionModel' is 'recognition_01', if the latest model needed, please explicitly specify the model you need in this parameter. New faces that are added to an existing face list will use the recognition model that's already associated with the collection. Existing face features in a face list can't be updated to features extracted by another version of recognition model. * 'recognition_01': The default recognition model for [FaceList- Create](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524b). All those face lists created before 2019 March are bonded with this recognition model. * 'recognition_02': Recognition model released in 2019 March. 'recognition_02' is recommended since its overall accuracy is improved compared with 'recognition_01'.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.meta_data_contract import MetaDataContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    face_list_id = 'face_list_id_example' # str | Id referencing a particular face list.
    body = openapi_client.MetaDataContract() # MetaDataContract | Request body for creating a face list.

    try:
        api_instance.face_list_create(face_list_id, body)
    except Exception as e:
        print("Exception when calling DefaultApi->face_list_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **face_list_id** | **str**| Id referencing a particular face list. | 
 **body** | [**MetaDataContract**](MetaDataContract.md)| Request body for creating a face list. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **face_list_delete**
> face_list_delete(face_list_id)



Delete a specified face list.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    face_list_id = 'face_list_id_example' # str | Id referencing a particular face list.

    try:
        api_instance.face_list_delete(face_list_id)
    except Exception as e:
        print("Exception when calling DefaultApi->face_list_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **face_list_id** | **str**| Id referencing a particular face list. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **face_list_delete_face**
> face_list_delete_face(face_list_id, persisted_face_id)



Delete a face from a face list by specified faceListId and persistedFaceId. <br /> Adding/deleting faces to/from a same face list are processed sequentially and to/from different face lists are in parallel.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    face_list_id = 'face_list_id_example' # str | Id referencing a particular face list.
    persisted_face_id = 'persisted_face_id_example' # str | Id referencing a particular persistedFaceId of an existing face.

    try:
        api_instance.face_list_delete_face(face_list_id, persisted_face_id)
    except Exception as e:
        print("Exception when calling DefaultApi->face_list_delete_face: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **face_list_id** | **str**| Id referencing a particular face list. | 
 **persisted_face_id** | **str**| Id referencing a particular persistedFaceId of an existing face. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **face_list_get**
> FaceList face_list_get(face_list_id, return_recognition_model=return_recognition_model)



Retrieve a face list’s faceListId, name, userData, recognitionModel and faces in the face list. 

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.face_list import FaceList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    face_list_id = 'face_list_id_example' # str | Id referencing a particular face list.
    return_recognition_model = False # bool | A value indicating whether the operation should return 'recognitionModel' in response. (optional) (default to False)

    try:
        api_response = api_instance.face_list_get(face_list_id, return_recognition_model=return_recognition_model)
        print("The response of DefaultApi->face_list_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->face_list_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **face_list_id** | **str**| Id referencing a particular face list. | 
 **return_recognition_model** | **bool**| A value indicating whether the operation should return &#39;recognitionModel&#39; in response. | [optional] [default to False]

### Return type

[**FaceList**](FaceList.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns the face list&#39;s information. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **face_list_list**
> List[FaceList] face_list_list(return_recognition_model=return_recognition_model)



List face lists’ faceListId, name, userData and recognitionModel. <br />  To get face information inside faceList use [FaceList - Get](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524c) 

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.face_list import FaceList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    return_recognition_model = False # bool | A value indicating whether the operation should return 'recognitionModel' in response. (optional) (default to False)

    try:
        api_response = api_instance.face_list_list(return_recognition_model=return_recognition_model)
        print("The response of DefaultApi->face_list_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->face_list_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **return_recognition_model** | **bool**| A value indicating whether the operation should return &#39;recognitionModel&#39; in response. | [optional] [default to False]

### Return type

[**List[FaceList]**](FaceList.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an array of faceList. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **face_list_update**
> face_list_update(face_list_id, body)



Update information of a face list.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.name_and_user_data_contract import NameAndUserDataContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    face_list_id = 'face_list_id_example' # str | Id referencing a particular face list.
    body = openapi_client.NameAndUserDataContract() # NameAndUserDataContract | Request body for updating a face list.

    try:
        api_instance.face_list_update(face_list_id, body)
    except Exception as e:
        print("Exception when calling DefaultApi->face_list_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **face_list_id** | **str**| Id referencing a particular face list. | 
 **body** | [**NameAndUserDataContract**](NameAndUserDataContract.md)| Request body for updating a face list. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **face_verify_face_to_face**
> VerifyResult face_verify_face_to_face(body)



Verify whether two faces belong to a same person or whether one face belongs to a person. <br/> Remarks:<br /> * Higher face image quality means better identification precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger. * For the scenarios that are sensitive to accuracy please make your own judgment. * The 'recognitionModel' associated with the query faces' faceIds should be the same as the 'recognitionModel' used by the target face, person group or large person group. 

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.verify_face_to_face_request import VerifyFaceToFaceRequest
from openapi_client.models.verify_result import VerifyResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = openapi_client.VerifyFaceToFaceRequest() # VerifyFaceToFaceRequest | Request body for face to face verification.

    try:
        api_response = api_instance.face_verify_face_to_face(body)
        print("The response of DefaultApi->face_verify_face_to_face:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->face_verify_face_to_face: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**VerifyFaceToFaceRequest**](VerifyFaceToFaceRequest.md)| Request body for face to face verification. | 

### Return type

[**VerifyResult**](VerifyResult.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns the verification result. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_face_list_add_face_from_url**
> PersistedFace large_face_list_add_face_from_url(large_face_list_id, image_url, user_data=user_data, target_face=target_face, detection_model=detection_model)



Add a face to a specified large face list, up to 1,000,000 faces. <br /> To deal with an image contains multiple faces, input face can be specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face. No image will be stored. Only the extracted face feature will be stored on server until [LargeFaceList Face - Delete](/docs/services/563879b61984550e40cbbe8d/operations/5a158c8ad2de3616c086f2d4) or [LargeFaceList - Delete](/docs/services/563879b61984550e40cbbe8d/operations/5a1580d5d2de3616c086f2cd) is called. <br /> Note persistedFaceId is different from faceId generated by [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236). * Higher face image quality means better recognition precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger. * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB. * \"targetFace\" rectangle should contain one face. Zero or multiple faces will be regarded as an error. If the provided \"targetFace\" rectangle is not returned from [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), there’s no guarantee to detect and add the face successfully. * Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions will cause failures. * Adding/deleting faces to/from a same face list are processed sequentially and to/from different face lists are in parallel. * The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels. Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum face size. * Different 'detectionModel' values can be provided. To use and compare different detection models, please refer to [How to specify a detection model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)   | Model | Recommended use-case(s) |   | ---------- | -------- |   | 'detection_01': | The default detection model for [LargeFaceList - Add Face](/docs/services/563879b61984550e40cbbe8d/operations/5a158c10d2de3616c086f2d3). Recommend for near frontal face detection. For scenarios with exceptionally large angle (head-pose) faces, occluded faces or wrong image orientation, the faces in such cases may not be detected. |   | 'detection_02': | Detection model released in 2019 May with improved accuracy especially on small, side and blurry faces. |  Quota: * Free-tier subscription quota: 1,000 faces per large face list. * S0-tier subscription quota: 1,000,000 faces per large face list.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.face_detect_with_url_request import FaceDetectWithUrlRequest
from openapi_client.models.persisted_face import PersistedFace
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_face_list_id = 'large_face_list_id_example' # str | Id referencing a particular large face list.
    image_url = openapi_client.FaceDetectWithUrlRequest() # FaceDetectWithUrlRequest | A JSON document with a URL pointing to the image that is to be analyzed.
    user_data = 'user_data_example' # str | User-specified data about the face for any purpose. The maximum length is 1KB. (optional)
    target_face = [56] # List[int] | A face rectangle to specify the target face to be added to a person in the format of \"targetFace=left,top,width,height\". E.g. \"targetFace=10,10,100,100\". If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image. (optional)
    detection_model = detection_01 # str | Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is 'detection_01', if another model is needed, please explicitly specify it. (optional) (default to detection_01)

    try:
        api_response = api_instance.large_face_list_add_face_from_url(large_face_list_id, image_url, user_data=user_data, target_face=target_face, detection_model=detection_model)
        print("The response of DefaultApi->large_face_list_add_face_from_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->large_face_list_add_face_from_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_face_list_id** | **str**| Id referencing a particular large face list. | 
 **image_url** | [**FaceDetectWithUrlRequest**](FaceDetectWithUrlRequest.md)| A JSON document with a URL pointing to the image that is to be analyzed. | 
 **user_data** | **str**| User-specified data about the face for any purpose. The maximum length is 1KB. | [optional] 
 **target_face** | [**List[int]**](int.md)| A face rectangle to specify the target face to be added to a person in the format of \&quot;targetFace&#x3D;left,top,width,height\&quot;. E.g. \&quot;targetFace&#x3D;10,10,100,100\&quot;. If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image. | [optional] 
 **detection_model** | **str**| Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is &#39;detection_01&#39;, if another model is needed, please explicitly specify it. | [optional] [default to detection_01]

### Return type

[**PersistedFace**](PersistedFace.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns a new persistedFaceId. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_face_list_create**
> large_face_list_create(large_face_list_id, body)



Create an empty large face list with user-specified largeFaceListId, name, an optional userData and recognitionModel. <br /> Large face list is a list of faces, up to 1,000,000 faces, and used by [Face - Find Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237). <br /> After creation, user should use [LargeFaceList Face - Add](/docs/services/563879b61984550e40cbbe8d/operations/5a158c10d2de3616c086f2d3) to import the faces and [LargeFaceList - Train](/docs/services/563879b61984550e40cbbe8d/operations/5a158422d2de3616c086f2d1) to make it ready for [Face - Find Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237). No image will be stored. Only the extracted face features are stored on server until [LargeFaceList - Delete](/docs/services/563879b61984550e40cbbe8d/operations/5a1580d5d2de3616c086f2cd) is called. <br /> Find Similar is used for scenario like finding celebrity-like faces, similar face filtering, or as a light way face identification. But if the actual use is to identify person, please use [PersonGroup](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395244) / [LargePersonGroup](/docs/services/563879b61984550e40cbbe8d/operations/599acdee6ac60f11b48b5a9d) and [Face - Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239). <br/>'recognitionModel' should be specified to associate with this large face list. The default value for 'recognitionModel' is 'recognition_01', if the latest model needed, please explicitly specify the model you need in this parameter. New faces that are added to an existing large face list will use the recognition model that's already associated with the collection. Existing face features in a large face list can't be updated to features extracted by another version of recognition model. * 'recognition_01': The default recognition model for [LargeFaceList- Create](/docs/services/563879b61984550e40cbbe8d/operations/5a157b68d2de3616c086f2cc). All those large face lists created before 2019 March are bonded with this recognition model. * 'recognition_02': Recognition model released in 2019 March. 'recognition_02' is recommended since its overall accuracy is improved compared with 'recognition_01'.  Large face list quota: * Free-tier subscription quota: 64 large face lists. * S0-tier subscription quota: 1,000,000 large face lists.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.meta_data_contract import MetaDataContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_face_list_id = 'large_face_list_id_example' # str | Id referencing a particular large face list.
    body = openapi_client.MetaDataContract() # MetaDataContract | Request body for creating a large face list.

    try:
        api_instance.large_face_list_create(large_face_list_id, body)
    except Exception as e:
        print("Exception when calling DefaultApi->large_face_list_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_face_list_id** | **str**| Id referencing a particular large face list. | 
 **body** | [**MetaDataContract**](MetaDataContract.md)| Request body for creating a large face list. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_face_list_delete**
> large_face_list_delete(large_face_list_id)



Delete a specified large face list.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_face_list_id = 'large_face_list_id_example' # str | Id referencing a particular large face list.

    try:
        api_instance.large_face_list_delete(large_face_list_id)
    except Exception as e:
        print("Exception when calling DefaultApi->large_face_list_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_face_list_id** | **str**| Id referencing a particular large face list. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_face_list_delete_face**
> large_face_list_delete_face(large_face_list_id, persisted_face_id)



Delete a face from a large face list by specified largeFaceListId and persistedFaceId. <br /> Adding/deleting faces to/from a same large face list are processed sequentially and to/from different large face lists are in parallel.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_face_list_id = 'large_face_list_id_example' # str | Id referencing a particular large face list.
    persisted_face_id = 'persisted_face_id_example' # str | Id referencing a particular persistedFaceId of an existing face.

    try:
        api_instance.large_face_list_delete_face(large_face_list_id, persisted_face_id)
    except Exception as e:
        print("Exception when calling DefaultApi->large_face_list_delete_face: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_face_list_id** | **str**| Id referencing a particular large face list. | 
 **persisted_face_id** | **str**| Id referencing a particular persistedFaceId of an existing face. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_face_list_get**
> LargeFaceList large_face_list_get(large_face_list_id, return_recognition_model=return_recognition_model)



Retrieve a large face list’s largeFaceListId, name, userData and recognitionModel.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.large_face_list import LargeFaceList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_face_list_id = 'large_face_list_id_example' # str | Id referencing a particular large face list.
    return_recognition_model = False # bool | A value indicating whether the operation should return 'recognitionModel' in response. (optional) (default to False)

    try:
        api_response = api_instance.large_face_list_get(large_face_list_id, return_recognition_model=return_recognition_model)
        print("The response of DefaultApi->large_face_list_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->large_face_list_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_face_list_id** | **str**| Id referencing a particular large face list. | 
 **return_recognition_model** | **bool**| A value indicating whether the operation should return &#39;recognitionModel&#39; in response. | [optional] [default to False]

### Return type

[**LargeFaceList**](LargeFaceList.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns the large face list&#39;s information. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_face_list_get_face**
> PersistedFace large_face_list_get_face(large_face_list_id, persisted_face_id)



Retrieve information about a persisted face (specified by persistedFaceId and its belonging largeFaceListId).

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.persisted_face import PersistedFace
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_face_list_id = 'large_face_list_id_example' # str | Id referencing a particular large face list.
    persisted_face_id = 'persisted_face_id_example' # str | Id referencing a particular persistedFaceId of an existing face.

    try:
        api_response = api_instance.large_face_list_get_face(large_face_list_id, persisted_face_id)
        print("The response of DefaultApi->large_face_list_get_face:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->large_face_list_get_face: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_face_list_id** | **str**| Id referencing a particular large face list. | 
 **persisted_face_id** | **str**| Id referencing a particular persistedFaceId of an existing face. | 

### Return type

[**PersistedFace**](PersistedFace.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns target persisted face&#39;s information (persistedFaceId and userData). |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_face_list_get_training_status**
> TrainingStatus large_face_list_get_training_status(large_face_list_id)



Retrieve the training status of a large face list (completed or ongoing).

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.training_status import TrainingStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_face_list_id = 'large_face_list_id_example' # str | Id referencing a particular large face list.

    try:
        api_response = api_instance.large_face_list_get_training_status(large_face_list_id)
        print("The response of DefaultApi->large_face_list_get_training_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->large_face_list_get_training_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_face_list_id** | **str**| Id referencing a particular large face list. | 

### Return type

[**TrainingStatus**](TrainingStatus.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns the large face list&#39;s training status. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_face_list_list**
> List[LargeFaceList] large_face_list_list(return_recognition_model=return_recognition_model)



List large face lists’ information of largeFaceListId, name, userData and recognitionModel. <br />  To get face information inside largeFaceList use [LargeFaceList Face - Get](/docs/services/563879b61984550e40cbbe8d/operations/5a158cf2d2de3616c086f2d5)<br /> * Large face lists are stored in alphabetical order of largeFaceListId. * \"start\" parameter (string, optional) is a user-provided largeFaceListId value that returned entries have larger ids by string comparison. \"start\" set to empty to indicate return from the first item. * \"top\" parameter (int, optional) specifies the number of entries to return. A maximal of 1000 entries can be returned in one call. To fetch more, you can specify \"start\" with the last returned entry’s Id of the current call. <br /> For example, total 5 large person lists: \"list1\", ..., \"list5\". <br /> \"start=&top=\" will return all 5 lists. <br /> \"start=&top=2\" will return \"list1\", \"list2\". <br /> \"start=list2&top=3\" will return \"list3\", \"list4\", \"list5\". 

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.large_face_list import LargeFaceList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    return_recognition_model = False # bool | A value indicating whether the operation should return 'recognitionModel' in response. (optional) (default to False)

    try:
        api_response = api_instance.large_face_list_list(return_recognition_model=return_recognition_model)
        print("The response of DefaultApi->large_face_list_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->large_face_list_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **return_recognition_model** | **bool**| A value indicating whether the operation should return &#39;recognitionModel&#39; in response. | [optional] [default to False]

### Return type

[**List[LargeFaceList]**](LargeFaceList.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an array of largeFaceList. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_face_list_list_faces**
> List[PersistedFace] large_face_list_list_faces(large_face_list_id, start=start, top=top)



List all faces in a large face list, and retrieve face information (including userData and persistedFaceIds of registered faces of the face).

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.persisted_face import PersistedFace
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_face_list_id = 'large_face_list_id_example' # str | Id referencing a particular large face list.
    start = 'start_example' # str | Starting face id to return (used to list a range of faces). (optional)
    top = 56 # int | Number of faces to return starting with the face id indicated by the 'start' parameter. (optional)

    try:
        api_response = api_instance.large_face_list_list_faces(large_face_list_id, start=start, top=top)
        print("The response of DefaultApi->large_face_list_list_faces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->large_face_list_list_faces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_face_list_id** | **str**| Id referencing a particular large face list. | 
 **start** | **str**| Starting face id to return (used to list a range of faces). | [optional] 
 **top** | **int**| Number of faces to return starting with the face id indicated by the &#39;start&#39; parameter. | [optional] 

### Return type

[**List[PersistedFace]**](PersistedFace.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an array of face information that belong to the large face list. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_face_list_train**
> large_face_list_train(large_face_list_id)



Queue a large face list training task, the training task may not be started immediately.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_face_list_id = 'large_face_list_id_example' # str | Id referencing a particular large face list.

    try:
        api_instance.large_face_list_train(large_face_list_id)
    except Exception as e:
        print("Exception when calling DefaultApi->large_face_list_train: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_face_list_id** | **str**| Id referencing a particular large face list. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The training task was queued successfully. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_face_list_update**
> large_face_list_update(large_face_list_id, body)



Update information of a large face list.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.name_and_user_data_contract import NameAndUserDataContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_face_list_id = 'large_face_list_id_example' # str | Id referencing a particular large face list.
    body = openapi_client.NameAndUserDataContract() # NameAndUserDataContract | Request body for updating a large face list.

    try:
        api_instance.large_face_list_update(large_face_list_id, body)
    except Exception as e:
        print("Exception when calling DefaultApi->large_face_list_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_face_list_id** | **str**| Id referencing a particular large face list. | 
 **body** | [**NameAndUserDataContract**](NameAndUserDataContract.md)| Request body for updating a large face list. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_face_list_update_face**
> large_face_list_update_face(large_face_list_id, persisted_face_id, body)



Update a persisted face's userData field.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.update_face_request import UpdateFaceRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_face_list_id = 'large_face_list_id_example' # str | Id referencing a particular large face list.
    persisted_face_id = 'persisted_face_id_example' # str | Id referencing a particular persistedFaceId of an existing face.
    body = openapi_client.UpdateFaceRequest() # UpdateFaceRequest | Request body for updating persisted face.

    try:
        api_instance.large_face_list_update_face(large_face_list_id, persisted_face_id, body)
    except Exception as e:
        print("Exception when calling DefaultApi->large_face_list_update_face: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_face_list_id** | **str**| Id referencing a particular large face list. | 
 **persisted_face_id** | **str**| Id referencing a particular persistedFaceId of an existing face. | 
 **body** | [**UpdateFaceRequest**](UpdateFaceRequest.md)| Request body for updating persisted face. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_person_group_create**
> large_person_group_create(large_person_group_id, body)



Create a new large person group with user-specified largePersonGroupId, name, an optional userData and recognitionModel. <br /> A large person group is the container of the uploaded person data, including face recognition feature, and up to 1,000,000 people. <br /> After creation, use [LargePersonGroup Person - Create](/docs/services/563879b61984550e40cbbe8d/operations/599adcba3a7b9412a4d53f40) to add person into the group, and call [LargePersonGroup - Train](/docs/services/563879b61984550e40cbbe8d/operations/599ae2d16ac60f11b48b5aa4) to get this group ready for [Face - Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239). <br /> No image will be stored. Only the person's extracted face features and userData will be stored on server until [LargePersonGroup Person - Delete](/docs/services/563879b61984550e40cbbe8d/operations/599ade5c6ac60f11b48b5aa2) or [LargePersonGroup - Delete](/docs/services/563879b61984550e40cbbe8d/operations/599adc216ac60f11b48b5a9f) is called. <br/>'recognitionModel' should be specified to associate with this large person group. The default value for 'recognitionModel' is 'recognition_01', if the latest model needed, please explicitly specify the model you need in this parameter. New faces that are added to an existing large person group will use the recognition model that's already associated with the collection. Existing face features in a large person group can't be updated to features extracted by another version of recognition model. * 'recognition_01': The default recognition model for [LargePersonGroup - Create](/docs/services/563879b61984550e40cbbe8d/operations/599acdee6ac60f11b48b5a9d). All those large person groups created before 2019 March are bonded with this recognition model. * 'recognition_02': Recognition model released in 2019 March. 'recognition_02' is recommended since its overall accuracy is improved compared with 'recognition_01'.  Large person group quota: * Free-tier subscription quota: 1,000 large person groups. * S0-tier subscription quota: 1,000,000 large person groups.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.meta_data_contract import MetaDataContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_person_group_id = 'large_person_group_id_example' # str | Id referencing a particular large person group.
    body = openapi_client.MetaDataContract() # MetaDataContract | Request body for creating new large person group.

    try:
        api_instance.large_person_group_create(large_person_group_id, body)
    except Exception as e:
        print("Exception when calling DefaultApi->large_person_group_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_person_group_id** | **str**| Id referencing a particular large person group. | 
 **body** | [**MetaDataContract**](MetaDataContract.md)| Request body for creating new large person group. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_person_group_delete**
> large_person_group_delete(large_person_group_id)



Delete an existing large person group. Persisted face features of all people in the large person group will also be deleted.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_person_group_id = 'large_person_group_id_example' # str | Id referencing a particular large person group.

    try:
        api_instance.large_person_group_delete(large_person_group_id)
    except Exception as e:
        print("Exception when calling DefaultApi->large_person_group_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_person_group_id** | **str**| Id referencing a particular large person group. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_person_group_get**
> LargePersonGroup large_person_group_get(large_person_group_id, return_recognition_model=return_recognition_model)



Retrieve the information of a large person group, including its name, userData and recognitionModel. This API returns large person group information only, use [LargePersonGroup Person - List](/docs/services/563879b61984550e40cbbe8d/operations/599adda06ac60f11b48b5aa1) instead to retrieve person information under the large person group. 

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.large_person_group import LargePersonGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_person_group_id = 'large_person_group_id_example' # str | Id referencing a particular large person group.
    return_recognition_model = False # bool | A value indicating whether the operation should return 'recognitionModel' in response. (optional) (default to False)

    try:
        api_response = api_instance.large_person_group_get(large_person_group_id, return_recognition_model=return_recognition_model)
        print("The response of DefaultApi->large_person_group_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->large_person_group_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_person_group_id** | **str**| Id referencing a particular large person group. | 
 **return_recognition_model** | **bool**| A value indicating whether the operation should return &#39;recognitionModel&#39; in response. | [optional] [default to False]

### Return type

[**LargePersonGroup**](LargePersonGroup.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns the large person group&#39;s information. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_person_group_get_training_status**
> TrainingStatus large_person_group_get_training_status(large_person_group_id)



Retrieve the training status of a large person group (completed or ongoing).

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.training_status import TrainingStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_person_group_id = 'large_person_group_id_example' # str | Id referencing a particular large person group.

    try:
        api_response = api_instance.large_person_group_get_training_status(large_person_group_id)
        print("The response of DefaultApi->large_person_group_get_training_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->large_person_group_get_training_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_person_group_id** | **str**| Id referencing a particular large person group. | 

### Return type

[**TrainingStatus**](TrainingStatus.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns the large person group&#39;s training status. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_person_group_list**
> List[LargePersonGroup] large_person_group_list(start=start, top=top, return_recognition_model=return_recognition_model)



List all existing large person groups’ largePersonGroupId, name, userData and recognitionModel.<br /> * Large person groups are stored in alphabetical order of largePersonGroupId. * \"start\" parameter (string, optional) is a user-provided largePersonGroupId value that returned entries have larger ids by string comparison. \"start\" set to empty to indicate return from the first item. * \"top\" parameter (int, optional) specifies the number of entries to return. A maximal of 1000 entries can be returned in one call. To fetch more, you can specify \"start\" with the last returned entry’s Id of the current call. <br /> For example, total 5 large person groups: \"group1\", ..., \"group5\". <br /> \"start=&top=\" will return all 5 groups. <br /> \"start=&top=2\" will return \"group1\", \"group2\". <br /> \"start=group2&top=3\" will return \"group3\", \"group4\", \"group5\". 

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.large_person_group import LargePersonGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    start = 'start_example' # str | List large person groups from the least largePersonGroupId greater than the \"start\". (optional)
    top = 1000 # int | The number of large person groups to list. (optional) (default to 1000)
    return_recognition_model = False # bool | A value indicating whether the operation should return 'recognitionModel' in response. (optional) (default to False)

    try:
        api_response = api_instance.large_person_group_list(start=start, top=top, return_recognition_model=return_recognition_model)
        print("The response of DefaultApi->large_person_group_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->large_person_group_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **str**| List large person groups from the least largePersonGroupId greater than the \&quot;start\&quot;. | [optional] 
 **top** | **int**| The number of large person groups to list. | [optional] [default to 1000]
 **return_recognition_model** | **bool**| A value indicating whether the operation should return &#39;recognitionModel&#39; in response. | [optional] [default to False]

### Return type

[**List[LargePersonGroup]**](LargePersonGroup.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an array of large person groups and their information. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_person_group_person_add_face_from_url**
> PersistedFace large_person_group_person_add_face_from_url(large_person_group_id, person_id, image_url, user_data=user_data, target_face=target_face, detection_model=detection_model)



Add a face to a person into a large person group for face identification or verification. To deal with an image contains multiple faces, input face can be specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face. No image will be stored. Only the extracted face feature will be stored on server until [LargePersonGroup PersonFace - Delete](/docs/services/563879b61984550e40cbbe8d/operations/599ae2966ac60f11b48b5aa3), [LargePersonGroup Person - Delete](/docs/services/563879b61984550e40cbbe8d/operations/599ade5c6ac60f11b48b5aa2) or [LargePersonGroup - Delete](/docs/services/563879b61984550e40cbbe8d/operations/599adc216ac60f11b48b5a9f) is called. <br /> Note persistedFaceId is different from faceId generated by [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236). * Higher face image quality means better recognition precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger. * Each person entry can hold up to 248 faces. * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB. * \"targetFace\" rectangle should contain one face. Zero or multiple faces will be regarded as an error. If the provided \"targetFace\" rectangle is not returned from [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), there’s no guarantee to detect and add the face successfully. * Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions will cause failures. * Adding/deleting faces to/from a same person will be processed sequentially. Adding/deleting faces to/from different persons are processed in parallel. * The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels. Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum face size. * Different 'detectionModel' values can be provided. To use and compare different detection models, please refer to [How to specify a detection model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)   | Model | Recommended use-case(s) |   | ---------- | -------- |   | 'detection_01': | The default detection model for [LargePersonGroup Person - Add Face](/docs/services/563879b61984550e40cbbe8d/operations/599adf2a3a7b9412a4d53f42). Recommend for near frontal face detection. For scenarios with exceptionally large angle (head-pose) faces, occluded faces or wrong image orientation, the faces in such cases may not be detected. |   | 'detection_02': | Detection model released in 2019 May with improved accuracy especially on small, side and blurry faces. |

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.face_detect_with_url_request import FaceDetectWithUrlRequest
from openapi_client.models.persisted_face import PersistedFace
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_person_group_id = 'large_person_group_id_example' # str | Id referencing a particular large person group.
    person_id = 'person_id_example' # str | Id referencing a particular person.
    image_url = openapi_client.FaceDetectWithUrlRequest() # FaceDetectWithUrlRequest | A JSON document with a URL pointing to the image that is to be analyzed.
    user_data = 'user_data_example' # str | User-specified data about the face for any purpose. The maximum length is 1KB. (optional)
    target_face = [56] # List[int] | A face rectangle to specify the target face to be added to a person in the format of \"targetFace=left,top,width,height\". E.g. \"targetFace=10,10,100,100\". If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image. (optional)
    detection_model = detection_01 # str | Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is 'detection_01', if another model is needed, please explicitly specify it. (optional) (default to detection_01)

    try:
        api_response = api_instance.large_person_group_person_add_face_from_url(large_person_group_id, person_id, image_url, user_data=user_data, target_face=target_face, detection_model=detection_model)
        print("The response of DefaultApi->large_person_group_person_add_face_from_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->large_person_group_person_add_face_from_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_person_group_id** | **str**| Id referencing a particular large person group. | 
 **person_id** | **str**| Id referencing a particular person. | 
 **image_url** | [**FaceDetectWithUrlRequest**](FaceDetectWithUrlRequest.md)| A JSON document with a URL pointing to the image that is to be analyzed. | 
 **user_data** | **str**| User-specified data about the face for any purpose. The maximum length is 1KB. | [optional] 
 **target_face** | [**List[int]**](int.md)| A face rectangle to specify the target face to be added to a person in the format of \&quot;targetFace&#x3D;left,top,width,height\&quot;. E.g. \&quot;targetFace&#x3D;10,10,100,100\&quot;. If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image. | [optional] 
 **detection_model** | **str**| Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is &#39;detection_01&#39;, if another model is needed, please explicitly specify it. | [optional] [default to detection_01]

### Return type

[**PersistedFace**](PersistedFace.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns the new persistedFaceId. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_person_group_person_create**
> Person large_person_group_person_create(large_person_group_id, body)



Create a new person in a specified large person group.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.name_and_user_data_contract import NameAndUserDataContract
from openapi_client.models.person import Person
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_person_group_id = 'large_person_group_id_example' # str | Id referencing a particular large person group.
    body = openapi_client.NameAndUserDataContract() # NameAndUserDataContract | Request body for creating new person.

    try:
        api_response = api_instance.large_person_group_person_create(large_person_group_id, body)
        print("The response of DefaultApi->large_person_group_person_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->large_person_group_person_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_person_group_id** | **str**| Id referencing a particular large person group. | 
 **body** | [**NameAndUserDataContract**](NameAndUserDataContract.md)| Request body for creating new person. | 

### Return type

[**Person**](Person.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns a new personId created. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_person_group_person_delete**
> large_person_group_person_delete(large_person_group_id, person_id)



Delete an existing person from a large person group. The persistedFaceId, userData, person name and face feature in the person entry will all be deleted.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_person_group_id = 'large_person_group_id_example' # str | Id referencing a particular large person group.
    person_id = 'person_id_example' # str | Id referencing a particular person.

    try:
        api_instance.large_person_group_person_delete(large_person_group_id, person_id)
    except Exception as e:
        print("Exception when calling DefaultApi->large_person_group_person_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_person_group_id** | **str**| Id referencing a particular large person group. | 
 **person_id** | **str**| Id referencing a particular person. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_person_group_person_delete_face**
> large_person_group_person_delete_face(large_person_group_id, person_id, persisted_face_id)



Delete a face from a person in a large person group by specified largePersonGroupId, personId and persistedFaceId. <br /> Adding/deleting faces to/from a same person will be processed sequentially. Adding/deleting faces to/from different persons are processed in parallel.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_person_group_id = 'large_person_group_id_example' # str | Id referencing a particular large person group.
    person_id = 'person_id_example' # str | Id referencing a particular person.
    persisted_face_id = 'persisted_face_id_example' # str | Id referencing a particular persistedFaceId of an existing face.

    try:
        api_instance.large_person_group_person_delete_face(large_person_group_id, person_id, persisted_face_id)
    except Exception as e:
        print("Exception when calling DefaultApi->large_person_group_person_delete_face: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_person_group_id** | **str**| Id referencing a particular large person group. | 
 **person_id** | **str**| Id referencing a particular person. | 
 **persisted_face_id** | **str**| Id referencing a particular persistedFaceId of an existing face. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_person_group_person_get**
> Person large_person_group_person_get(large_person_group_id, person_id)



Retrieve a person's name and userData, and the persisted faceIds representing the registered person face feature.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.person import Person
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_person_group_id = 'large_person_group_id_example' # str | Id referencing a particular large person group.
    person_id = 'person_id_example' # str | Id referencing a particular person.

    try:
        api_response = api_instance.large_person_group_person_get(large_person_group_id, person_id)
        print("The response of DefaultApi->large_person_group_person_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->large_person_group_person_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_person_group_id** | **str**| Id referencing a particular large person group. | 
 **person_id** | **str**| Id referencing a particular person. | 

### Return type

[**Person**](Person.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns the person&#39;s information. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_person_group_person_get_face**
> PersistedFace large_person_group_person_get_face(large_person_group_id, person_id, persisted_face_id)



Retrieve information about a persisted face (specified by persistedFaceId, personId and its belonging largePersonGroupId).

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.persisted_face import PersistedFace
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_person_group_id = 'large_person_group_id_example' # str | Id referencing a particular large person group.
    person_id = 'person_id_example' # str | Id referencing a particular person.
    persisted_face_id = 'persisted_face_id_example' # str | Id referencing a particular persistedFaceId of an existing face.

    try:
        api_response = api_instance.large_person_group_person_get_face(large_person_group_id, person_id, persisted_face_id)
        print("The response of DefaultApi->large_person_group_person_get_face:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->large_person_group_person_get_face: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_person_group_id** | **str**| Id referencing a particular large person group. | 
 **person_id** | **str**| Id referencing a particular person. | 
 **persisted_face_id** | **str**| Id referencing a particular persistedFaceId of an existing face. | 

### Return type

[**PersistedFace**](PersistedFace.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns target persisted face&#39;s information (persistedFaceId and userData). |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_person_group_person_list**
> List[Person] large_person_group_person_list(large_person_group_id, start=start, top=top)



List all persons in a large person group, and retrieve person information (including personId, name, userData and persistedFaceIds of registered faces of the person).

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.person import Person
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_person_group_id = 'large_person_group_id_example' # str | Id referencing a particular large person group.
    start = 'start_example' # str | Starting person id to return (used to list a range of persons). (optional)
    top = 56 # int | Number of persons to return starting with the person id indicated by the 'start' parameter. (optional)

    try:
        api_response = api_instance.large_person_group_person_list(large_person_group_id, start=start, top=top)
        print("The response of DefaultApi->large_person_group_person_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->large_person_group_person_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_person_group_id** | **str**| Id referencing a particular large person group. | 
 **start** | **str**| Starting person id to return (used to list a range of persons). | [optional] 
 **top** | **int**| Number of persons to return starting with the person id indicated by the &#39;start&#39; parameter. | [optional] 

### Return type

[**List[Person]**](Person.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an array of person information that belong to the large person group. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_person_group_person_update**
> large_person_group_person_update(large_person_group_id, person_id, body)



Update name or userData of a person.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.name_and_user_data_contract import NameAndUserDataContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_person_group_id = 'large_person_group_id_example' # str | Id referencing a particular large person group.
    person_id = 'person_id_example' # str | Id referencing a particular person.
    body = openapi_client.NameAndUserDataContract() # NameAndUserDataContract | Request body for person update operation.

    try:
        api_instance.large_person_group_person_update(large_person_group_id, person_id, body)
    except Exception as e:
        print("Exception when calling DefaultApi->large_person_group_person_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_person_group_id** | **str**| Id referencing a particular large person group. | 
 **person_id** | **str**| Id referencing a particular person. | 
 **body** | [**NameAndUserDataContract**](NameAndUserDataContract.md)| Request body for person update operation. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_person_group_person_update_face**
> large_person_group_person_update_face(large_person_group_id, person_id, persisted_face_id, body)



Update a person persisted face's userData field.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.update_face_request import UpdateFaceRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_person_group_id = 'large_person_group_id_example' # str | Id referencing a particular large person group.
    person_id = 'person_id_example' # str | Id referencing a particular person.
    persisted_face_id = 'persisted_face_id_example' # str | Id referencing a particular persistedFaceId of an existing face.
    body = openapi_client.UpdateFaceRequest() # UpdateFaceRequest | Request body for updating persisted face.

    try:
        api_instance.large_person_group_person_update_face(large_person_group_id, person_id, persisted_face_id, body)
    except Exception as e:
        print("Exception when calling DefaultApi->large_person_group_person_update_face: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_person_group_id** | **str**| Id referencing a particular large person group. | 
 **person_id** | **str**| Id referencing a particular person. | 
 **persisted_face_id** | **str**| Id referencing a particular persistedFaceId of an existing face. | 
 **body** | [**UpdateFaceRequest**](UpdateFaceRequest.md)| Request body for updating persisted face. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_person_group_train**
> large_person_group_train(large_person_group_id)



Queue a large person group training task, the training task may not be started immediately.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_person_group_id = 'large_person_group_id_example' # str | Id referencing a particular large person group.

    try:
        api_instance.large_person_group_train(large_person_group_id)
    except Exception as e:
        print("Exception when calling DefaultApi->large_person_group_train: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_person_group_id** | **str**| Id referencing a particular large person group. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The training task was queued successfully. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **large_person_group_update**
> large_person_group_update(large_person_group_id, body)



Update an existing large person group's display name and userData. The properties which does not appear in request body will not be updated.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.name_and_user_data_contract import NameAndUserDataContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    large_person_group_id = 'large_person_group_id_example' # str | Id referencing a particular large person group.
    body = openapi_client.NameAndUserDataContract() # NameAndUserDataContract | Request body for updating large person group.

    try:
        api_instance.large_person_group_update(large_person_group_id, body)
    except Exception as e:
        print("Exception when calling DefaultApi->large_person_group_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **large_person_group_id** | **str**| Id referencing a particular large person group. | 
 **body** | [**NameAndUserDataContract**](NameAndUserDataContract.md)| Request body for updating large person group. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **person_group_create**
> person_group_create(person_group_id, body)



Create a new person group with specified personGroupId, name, user-provided userData and recognitionModel. <br /> A person group is the container of the uploaded person data, including face recognition features. <br /> After creation, use [PersonGroup Person - Create](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523c) to add persons into the group, and then call [PersonGroup - Train](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395249) to get this group ready for [Face - Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239). <br /> No image will be stored. Only the person's extracted face features and userData will be stored on server until [PersonGroup Person - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523d) or [PersonGroup - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395245) is called. <br/>'recognitionModel' should be specified to associate with this person group. The default value for 'recognitionModel' is 'recognition_01', if the latest model needed, please explicitly specify the model you need in this parameter. New faces that are added to an existing person group will use the recognition model that's already associated with the collection. Existing face features in a person group can't be updated to features extracted by another version of recognition model. * 'recognition_01': The default recognition model for [PersonGroup - Create](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395244). All those person groups created before 2019 March are bonded with this recognition model. * 'recognition_02': Recognition model released in 2019 March. 'recognition_02' is recommended since its overall accuracy is improved compared with 'recognition_01'.  Person group quota: * Free-tier subscription quota: 1,000 person groups. Each holds up to 1,000 persons. * S0-tier subscription quota: 1,000,000 person groups. Each holds up to 10,000 persons. * to handle larger scale face identification problem, please consider using [LargePersonGroup](/docs/services/563879b61984550e40cbbe8d/operations/599acdee6ac60f11b48b5a9d).

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.meta_data_contract import MetaDataContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    person_group_id = 'person_group_id_example' # str | Id referencing a particular person group.
    body = openapi_client.MetaDataContract() # MetaDataContract | Request body for creating new person group.

    try:
        api_instance.person_group_create(person_group_id, body)
    except Exception as e:
        print("Exception when calling DefaultApi->person_group_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person_group_id** | **str**| Id referencing a particular person group. | 
 **body** | [**MetaDataContract**](MetaDataContract.md)| Request body for creating new person group. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **person_group_delete**
> person_group_delete(person_group_id)



Delete an existing person group. Persisted face features of all people in the person group will also be deleted.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    person_group_id = 'person_group_id_example' # str | Id referencing a particular person group.

    try:
        api_instance.person_group_delete(person_group_id)
    except Exception as e:
        print("Exception when calling DefaultApi->person_group_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person_group_id** | **str**| Id referencing a particular person group. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **person_group_get**
> PersonGroup person_group_get(person_group_id, return_recognition_model=return_recognition_model)



Retrieve person group name, userData and recognitionModel. To get person information under this personGroup, use [PersonGroup Person - List](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395241).

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.person_group import PersonGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    person_group_id = 'person_group_id_example' # str | Id referencing a particular person group.
    return_recognition_model = False # bool | A value indicating whether the operation should return 'recognitionModel' in response. (optional) (default to False)

    try:
        api_response = api_instance.person_group_get(person_group_id, return_recognition_model=return_recognition_model)
        print("The response of DefaultApi->person_group_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->person_group_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person_group_id** | **str**| Id referencing a particular person group. | 
 **return_recognition_model** | **bool**| A value indicating whether the operation should return &#39;recognitionModel&#39; in response. | [optional] [default to False]

### Return type

[**PersonGroup**](PersonGroup.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns the person group&#39;s information. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **person_group_get_training_status**
> TrainingStatus person_group_get_training_status(person_group_id)



Retrieve the training status of a person group (completed or ongoing).

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.training_status import TrainingStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    person_group_id = 'person_group_id_example' # str | Id referencing a particular person group.

    try:
        api_response = api_instance.person_group_get_training_status(person_group_id)
        print("The response of DefaultApi->person_group_get_training_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->person_group_get_training_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person_group_id** | **str**| Id referencing a particular person group. | 

### Return type

[**TrainingStatus**](TrainingStatus.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns the person group&#39;s training status. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **person_group_list**
> List[PersonGroup] person_group_list(start=start, top=top, return_recognition_model=return_recognition_model)



List person groups’ personGroupId, name, userData and recognitionModel.<br /> * Person groups are stored in alphabetical order of personGroupId. * \"start\" parameter (string, optional) is a user-provided personGroupId value that returned entries have larger ids by string comparison. \"start\" set to empty to indicate return from the first item. * \"top\" parameter (int, optional) specifies the number of entries to return. A maximal of 1000 entries can be returned in one call. To fetch more, you can specify \"start\" with the last returned entry’s Id of the current call. <br /> For example, total 5 person groups: \"group1\", ..., \"group5\". <br /> \"start=&top=\" will return all 5 groups. <br /> \"start=&top=2\" will return \"group1\", \"group2\". <br /> \"start=group2&top=3\" will return \"group3\", \"group4\", \"group5\". 

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.person_group import PersonGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    start = 'start_example' # str | List person groups from the least personGroupId greater than the \"start\". (optional)
    top = 1000 # int | The number of person groups to list. (optional) (default to 1000)
    return_recognition_model = False # bool | A value indicating whether the operation should return 'recognitionModel' in response. (optional) (default to False)

    try:
        api_response = api_instance.person_group_list(start=start, top=top, return_recognition_model=return_recognition_model)
        print("The response of DefaultApi->person_group_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->person_group_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **str**| List person groups from the least personGroupId greater than the \&quot;start\&quot;. | [optional] 
 **top** | **int**| The number of person groups to list. | [optional] [default to 1000]
 **return_recognition_model** | **bool**| A value indicating whether the operation should return &#39;recognitionModel&#39; in response. | [optional] [default to False]

### Return type

[**List[PersonGroup]**](PersonGroup.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an array of person groups and their information. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **person_group_person_add_face_from_url**
> PersistedFace person_group_person_add_face_from_url(person_group_id, person_id, image_url, user_data=user_data, target_face=target_face, detection_model=detection_model)



Add a face to a person into a person group for face identification or verification. To deal with an image contains multiple faces, input face can be specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face. No image will be stored. Only the extracted face feature will be stored on server until [PersonGroup PersonFace - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523e), [PersonGroup Person - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523d) or [PersonGroup - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395245) is called. <br /> Note persistedFaceId is different from faceId generated by [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236). *   Higher face image quality means better recognition precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger. *   Each person entry can hold up to 248 faces. *   JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB. *   \"targetFace\" rectangle should contain one face. Zero or multiple faces will be regarded as an error. If the provided \"targetFace\" rectangle is not returned from [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), there’s no guarantee to detect and add the face successfully. *   Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions will cause failures. *   Adding/deleting faces to/from a same person will be processed sequentially. Adding/deleting faces to/from different persons are processed in parallel. * The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels. Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum face size. * Different 'detectionModel' values can be provided. To use and compare different detection models, please refer to [How to specify a detection model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)   | Model | Recommended use-case(s) |   | ---------- | -------- |   | 'detection_01': | The default detection model for [PersonGroup Person - Add Face](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523b). Recommend for near frontal face detection. For scenarios with exceptionally large angle (head-pose) faces, occluded faces or wrong image orientation, the faces in such cases may not be detected. |   | 'detection_02': | Detection model released in 2019 May with improved accuracy especially on small, side and blurry faces. |

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.face_detect_with_url_request import FaceDetectWithUrlRequest
from openapi_client.models.persisted_face import PersistedFace
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    person_group_id = 'person_group_id_example' # str | Id referencing a particular person group.
    person_id = 'person_id_example' # str | Id referencing a particular person.
    image_url = openapi_client.FaceDetectWithUrlRequest() # FaceDetectWithUrlRequest | A JSON document with a URL pointing to the image that is to be analyzed.
    user_data = 'user_data_example' # str | User-specified data about the face for any purpose. The maximum length is 1KB. (optional)
    target_face = [56] # List[int] | A face rectangle to specify the target face to be added to a person in the format of \"targetFace=left,top,width,height\". E.g. \"targetFace=10,10,100,100\". If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image. (optional)
    detection_model = detection_01 # str | Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is 'detection_01', if another model is needed, please explicitly specify it. (optional) (default to detection_01)

    try:
        api_response = api_instance.person_group_person_add_face_from_url(person_group_id, person_id, image_url, user_data=user_data, target_face=target_face, detection_model=detection_model)
        print("The response of DefaultApi->person_group_person_add_face_from_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->person_group_person_add_face_from_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person_group_id** | **str**| Id referencing a particular person group. | 
 **person_id** | **str**| Id referencing a particular person. | 
 **image_url** | [**FaceDetectWithUrlRequest**](FaceDetectWithUrlRequest.md)| A JSON document with a URL pointing to the image that is to be analyzed. | 
 **user_data** | **str**| User-specified data about the face for any purpose. The maximum length is 1KB. | [optional] 
 **target_face** | [**List[int]**](int.md)| A face rectangle to specify the target face to be added to a person in the format of \&quot;targetFace&#x3D;left,top,width,height\&quot;. E.g. \&quot;targetFace&#x3D;10,10,100,100\&quot;. If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image. | [optional] 
 **detection_model** | **str**| Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is &#39;detection_01&#39;, if another model is needed, please explicitly specify it. | [optional] [default to detection_01]

### Return type

[**PersistedFace**](PersistedFace.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns the new persistedFaceId. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **person_group_person_create**
> Person person_group_person_create(person_group_id, body)



Create a new person in a specified person group.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.name_and_user_data_contract import NameAndUserDataContract
from openapi_client.models.person import Person
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    person_group_id = 'person_group_id_example' # str | Id referencing a particular person group.
    body = openapi_client.NameAndUserDataContract() # NameAndUserDataContract | Request body for creating new person.

    try:
        api_response = api_instance.person_group_person_create(person_group_id, body)
        print("The response of DefaultApi->person_group_person_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->person_group_person_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person_group_id** | **str**| Id referencing a particular person group. | 
 **body** | [**NameAndUserDataContract**](NameAndUserDataContract.md)| Request body for creating new person. | 

### Return type

[**Person**](Person.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns a new personId created. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **person_group_person_delete**
> person_group_person_delete(person_group_id, person_id)



Delete an existing person from a person group. The persistedFaceId, userData, person name and face feature in the person entry will all be deleted.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    person_group_id = 'person_group_id_example' # str | Id referencing a particular person group.
    person_id = 'person_id_example' # str | Id referencing a particular person.

    try:
        api_instance.person_group_person_delete(person_group_id, person_id)
    except Exception as e:
        print("Exception when calling DefaultApi->person_group_person_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person_group_id** | **str**| Id referencing a particular person group. | 
 **person_id** | **str**| Id referencing a particular person. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **person_group_person_delete_face**
> person_group_person_delete_face(person_group_id, person_id, persisted_face_id)



Delete a face from a person in a person group by specified personGroupId, personId and persistedFaceId. <br /> Adding/deleting faces to/from a same person will be processed sequentially. Adding/deleting faces to/from different persons are processed in parallel.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    person_group_id = 'person_group_id_example' # str | Id referencing a particular person group.
    person_id = 'person_id_example' # str | Id referencing a particular person.
    persisted_face_id = 'persisted_face_id_example' # str | Id referencing a particular persistedFaceId of an existing face.

    try:
        api_instance.person_group_person_delete_face(person_group_id, person_id, persisted_face_id)
    except Exception as e:
        print("Exception when calling DefaultApi->person_group_person_delete_face: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person_group_id** | **str**| Id referencing a particular person group. | 
 **person_id** | **str**| Id referencing a particular person. | 
 **persisted_face_id** | **str**| Id referencing a particular persistedFaceId of an existing face. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **person_group_person_get**
> Person person_group_person_get(person_group_id, person_id)



Retrieve a person's information, including registered persisted faces, name and userData.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.person import Person
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    person_group_id = 'person_group_id_example' # str | Id referencing a particular person group.
    person_id = 'person_id_example' # str | Id referencing a particular person.

    try:
        api_response = api_instance.person_group_person_get(person_group_id, person_id)
        print("The response of DefaultApi->person_group_person_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->person_group_person_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person_group_id** | **str**| Id referencing a particular person group. | 
 **person_id** | **str**| Id referencing a particular person. | 

### Return type

[**Person**](Person.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns the person&#39;s information. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **person_group_person_get_face**
> PersistedFace person_group_person_get_face(person_group_id, person_id, persisted_face_id)



Retrieve information about a persisted face (specified by persistedFaceId, personId and its belonging personGroupId).

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.persisted_face import PersistedFace
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    person_group_id = 'person_group_id_example' # str | Id referencing a particular person group.
    person_id = 'person_id_example' # str | Id referencing a particular person.
    persisted_face_id = 'persisted_face_id_example' # str | Id referencing a particular persistedFaceId of an existing face.

    try:
        api_response = api_instance.person_group_person_get_face(person_group_id, person_id, persisted_face_id)
        print("The response of DefaultApi->person_group_person_get_face:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->person_group_person_get_face: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person_group_id** | **str**| Id referencing a particular person group. | 
 **person_id** | **str**| Id referencing a particular person. | 
 **persisted_face_id** | **str**| Id referencing a particular persistedFaceId of an existing face. | 

### Return type

[**PersistedFace**](PersistedFace.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns target persisted face&#39;s information (persistedFaceId and userData). |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **person_group_person_list**
> List[Person] person_group_person_list(person_group_id, start=start, top=top)



List all persons in a person group, and retrieve person information (including personId, name, userData and persistedFaceIds of registered faces of the person).

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.person import Person
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    person_group_id = 'person_group_id_example' # str | Id referencing a particular person group.
    start = 'start_example' # str | Starting person id to return (used to list a range of persons). (optional)
    top = 56 # int | Number of persons to return starting with the person id indicated by the 'start' parameter. (optional)

    try:
        api_response = api_instance.person_group_person_list(person_group_id, start=start, top=top)
        print("The response of DefaultApi->person_group_person_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->person_group_person_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person_group_id** | **str**| Id referencing a particular person group. | 
 **start** | **str**| Starting person id to return (used to list a range of persons). | [optional] 
 **top** | **int**| Number of persons to return starting with the person id indicated by the &#39;start&#39; parameter. | [optional] 

### Return type

[**List[Person]**](Person.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an array of person information that belong to the person group. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **person_group_person_update**
> person_group_person_update(person_group_id, person_id, body)



Update name or userData of a person.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.name_and_user_data_contract import NameAndUserDataContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    person_group_id = 'person_group_id_example' # str | Id referencing a particular person group.
    person_id = 'person_id_example' # str | Id referencing a particular person.
    body = openapi_client.NameAndUserDataContract() # NameAndUserDataContract | Request body for person update operation.

    try:
        api_instance.person_group_person_update(person_group_id, person_id, body)
    except Exception as e:
        print("Exception when calling DefaultApi->person_group_person_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person_group_id** | **str**| Id referencing a particular person group. | 
 **person_id** | **str**| Id referencing a particular person. | 
 **body** | [**NameAndUserDataContract**](NameAndUserDataContract.md)| Request body for person update operation. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **person_group_person_update_face**
> person_group_person_update_face(person_group_id, person_id, persisted_face_id, body)



Add a face to a person into a person group for face identification or verification. To deal with an image contains multiple faces, input face can be specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face. No image will be stored. Only the extracted face feature will be stored on server until [PersonGroup PersonFace - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523e), [PersonGroup Person - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523d) or [PersonGroup - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395245) is called. <br /> Note persistedFaceId is different from faceId generated by [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236). * Higher face image quality means better recognition precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger. * Each person entry can hold up to 248 faces. * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB. * \"targetFace\" rectangle should contain one face. Zero or multiple faces will be regarded as an error. If the provided \"targetFace\" rectangle is not returned from [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), there’s no guarantee to detect and add the face successfully. * Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions will cause failures. * Adding/deleting faces to/from a same person will be processed sequentially. Adding/deleting faces to/from different persons are processed in parallel.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.update_face_request import UpdateFaceRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    person_group_id = 'person_group_id_example' # str | Id referencing a particular person group.
    person_id = 'person_id_example' # str | Id referencing a particular person.
    persisted_face_id = 'persisted_face_id_example' # str | Id referencing a particular persistedFaceId of an existing face.
    body = openapi_client.UpdateFaceRequest() # UpdateFaceRequest | Request body for updating persisted face.

    try:
        api_instance.person_group_person_update_face(person_group_id, person_id, persisted_face_id, body)
    except Exception as e:
        print("Exception when calling DefaultApi->person_group_person_update_face: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person_group_id** | **str**| Id referencing a particular person group. | 
 **person_id** | **str**| Id referencing a particular person. | 
 **persisted_face_id** | **str**| Id referencing a particular persistedFaceId of an existing face. | 
 **body** | [**UpdateFaceRequest**](UpdateFaceRequest.md)| Request body for updating persisted face. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **person_group_train**
> person_group_train(person_group_id)



Queue a person group training task, the training task may not be started immediately.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    person_group_id = 'person_group_id_example' # str | Id referencing a particular person group.

    try:
        api_instance.person_group_train(person_group_id)
    except Exception as e:
        print("Exception when calling DefaultApi->person_group_train: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person_group_id** | **str**| Id referencing a particular person group. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The training task was queued successfully. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **person_group_update**
> person_group_update(person_group_id, body)



Update an existing person group's display name and userData. The properties which does not appear in request body will not be updated.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.name_and_user_data_contract import NameAndUserDataContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    person_group_id = 'person_group_id_example' # str | Id referencing a particular person group.
    body = openapi_client.NameAndUserDataContract() # NameAndUserDataContract | Request body for updating person group.

    try:
        api_instance.person_group_update(person_group_id, body)
    except Exception as e:
        print("Exception when calling DefaultApi->person_group_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person_group_id** | **str**| Id referencing a particular person group. | 
 **body** | [**NameAndUserDataContract**](NameAndUserDataContract.md)| Request body for updating person group. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **snapshot_apply**
> snapshot_apply(snapshot_id, body)



Submit an operation to apply a snapshot to current subscription. For each snapshot, only subscriptions included in the applyScope of Snapshot - Take can apply it.<br /> The snapshot interfaces are for users to backup and restore their face data from one face subscription to another, inside same region or across regions. The workflow contains two phases, user first calls Snapshot - Take to create a copy of the source object and store it as a snapshot, then calls Snapshot - Apply to paste the snapshot to target subscription. The snapshots are stored in a centralized location (per Azure instance), so that they can be applied cross accounts and regions.<br /> Applying snapshot is an asynchronous operation. An operation id can be obtained from the \"Operation-Location\" field in response header, to be used in OperationStatus - Get for tracking the progress of applying the snapshot. The target object id will be included in the \"resourceLocation\" field in OperationStatus - Get response when the operation status is \"succeeded\".<br /> Snapshot applying time depends on the number of person and face entries in the snapshot object. It could be in seconds, or up to 1 hour for 1,000,000 persons with multiple faces.<br /> Snapshots will be automatically expired and cleaned in 48 hours after it is created by Snapshot - Take. So the target subscription is required to apply the snapshot in 48 hours since its creation.<br /> Applying a snapshot will not block any other operations against the target object, however it is not recommended because the correctness cannot be guaranteed during snapshot applying. After snapshot applying is completed, all operations towards the target object can work as normal. Snapshot also includes the training results of the source object, which means target subscription the snapshot applied to does not need re-train the target object before calling Identify/FindSimilar.<br /> One snapshot can be applied multiple times in parallel, while currently only CreateNew apply mode is supported, which means the apply operation will fail if target subscription already contains an object of same type and using the same objectId. Users can specify the \"objectId\" in request body to avoid such conflicts.<br /> * Free-tier subscription quota: 100 apply operations per month. * S0-tier subscription quota: 100 apply operations per day.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.apply_snapshot_request import ApplySnapshotRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    snapshot_id = 'snapshot_id_example' # str | Id referencing a particular snapshot.
    body = openapi_client.ApplySnapshotRequest() # ApplySnapshotRequest | Request body for applying a snapshot.

    try:
        api_instance.snapshot_apply(snapshot_id, body)
    except Exception as e:
        print("Exception when calling DefaultApi->snapshot_apply: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshot_id** | **str**| Id referencing a particular snapshot. | 
 **body** | [**ApplySnapshotRequest**](ApplySnapshotRequest.md)| Request body for applying a snapshot. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The snapshot applying task was queued successfully. |  * Operation-Location - Operation location with an operation id used to track the progress of applying the snapshot by OperationStatus - Get. <br>  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **snapshot_delete**
> snapshot_delete(snapshot_id)



Delete an existing snapshot according to the snapshotId. All object data and information in the snapshot will also be deleted. Only the source subscription who took the snapshot can delete the snapshot. If the user does not delete a snapshot with this API, the snapshot will still be automatically deleted in 48 hours after creation.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    snapshot_id = 'snapshot_id_example' # str | Id referencing a particular snapshot.

    try:
        api_instance.snapshot_delete(snapshot_id)
    except Exception as e:
        print("Exception when calling DefaultApi->snapshot_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshot_id** | **str**| Id referencing a particular snapshot. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **snapshot_get**
> Snapshot snapshot_get(snapshot_id)



Retrieve information about a snapshot. Snapshot is only accessible to the source subscription who took it, and target subscriptions included in the applyScope in Snapshot - Take.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.snapshot import Snapshot
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    snapshot_id = 'snapshot_id_example' # str | Id referencing a particular snapshot.

    try:
        api_response = api_instance.snapshot_get(snapshot_id)
        print("The response of DefaultApi->snapshot_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->snapshot_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshot_id** | **str**| Id referencing a particular snapshot. | 

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns the snapshot&#39;s information. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **snapshot_get_operation_status**
> OperationStatus snapshot_get_operation_status(operation_id)



Retrieve the status of a take/apply snapshot operation.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    operation_id = 'operation_id_example' # str | Id referencing a particular take/apply snapshot operation.

    try:
        api_response = api_instance.snapshot_get_operation_status(operation_id)
        print("The response of DefaultApi->snapshot_get_operation_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->snapshot_get_operation_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operation_id** | **str**| Id referencing a particular take/apply snapshot operation. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns the snapshot operation&#39;s status. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **snapshot_list**
> List[Snapshot] snapshot_list(type=type, apply_scope=apply_scope)



List all accessible snapshots with related information, including snapshots that were taken by the user, or snapshots to be applied to the user (subscription id was included in the applyScope in Snapshot - Take).

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.snapshot import Snapshot
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    type = 'type_example' # str | User specified object type as a search filter. (optional)
    apply_scope = ['apply_scope_example'] # List[str] | User specified snapshot apply scopes as a search filter. ApplyScope is an array of the target Azure subscription ids for the snapshot, specified by the user who created the snapshot by Snapshot - Take. (optional)

    try:
        api_response = api_instance.snapshot_list(type=type, apply_scope=apply_scope)
        print("The response of DefaultApi->snapshot_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->snapshot_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| User specified object type as a search filter. | [optional] 
 **apply_scope** | [**List[str]**](str.md)| User specified snapshot apply scopes as a search filter. ApplyScope is an array of the target Azure subscription ids for the snapshot, specified by the user who created the snapshot by Snapshot - Take. | [optional] 

### Return type

[**List[Snapshot]**](Snapshot.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an array of snapshots with snapshot information. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **snapshot_take**
> snapshot_take(body)



Submit an operation to take a snapshot of face list, large face list, person group or large person group, with user-specified snapshot type, source object id, apply scope and an optional user data.<br /> The snapshot interfaces are for users to backup and restore their face data from one face subscription to another, inside same region or across regions. The workflow contains two phases, user first calls Snapshot - Take to create a copy of the source object and store it as a snapshot, then calls Snapshot - Apply to paste the snapshot to target subscription. The snapshots are stored in a centralized location (per Azure instance), so that they can be applied cross accounts and regions.<br /> Taking snapshot is an asynchronous operation. An operation id can be obtained from the \"Operation-Location\" field in response header, to be used in OperationStatus - Get for tracking the progress of creating the snapshot. The snapshot id will be included in the \"resourceLocation\" field in OperationStatus - Get response when the operation status is \"succeeded\".<br /> Snapshot taking time depends on the number of person and face entries in the source object. It could be in seconds, or up to several hours for 1,000,000 persons with multiple faces.<br /> Snapshots will be automatically expired and cleaned in 48 hours after it is created by Snapshot - Take. User can delete the snapshot using Snapshot - Delete by themselves any time before expiration.<br /> Taking snapshot for a certain object will not block any other operations against the object. All read-only operations (Get/List and Identify/FindSimilar/Verify) can be conducted as usual. For all writable operations, including Add/Update/Delete the source object or its persons/faces and Train, they are not blocked but not recommended because writable updates may not be reflected on the snapshot during its taking. After snapshot taking is completed, all readable and writable operations can work as normal. Snapshot will also include the training results of the source object, which means target subscription the snapshot applied to does not need re-train the target object before calling Identify/FindSimilar.<br /> * Free-tier subscription quota: 100 take operations per month. * S0-tier subscription quota: 100 take operations per day.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.take_snapshot_request import TakeSnapshotRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = openapi_client.TakeSnapshotRequest() # TakeSnapshotRequest | Request body for taking a snapshot.

    try:
        api_instance.snapshot_take(body)
    except Exception as e:
        print("Exception when calling DefaultApi->snapshot_take: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TakeSnapshotRequest**](TakeSnapshotRequest.md)| Request body for taking a snapshot. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The snapshot taking task was queued successfully. |  * Operation-Location - Operation location with an operation id used to track the progress of applying the snapshot by OperationStatus - Get. <br>  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **snapshot_update**
> snapshot_update(snapshot_id, body)



Update the information of a snapshot. Only the source subscription who took the snapshot can update the snapshot.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.update_snapshot_request import UpdateSnapshotRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    snapshot_id = 'snapshot_id_example' # str | Id referencing a particular snapshot.
    body = openapi_client.UpdateSnapshotRequest() # UpdateSnapshotRequest | Request body for updating a snapshot.

    try:
        api_instance.snapshot_update(snapshot_id, body)
    except Exception as e:
        print("Exception when calling DefaultApi->snapshot_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshot_id** | **str**| Id referencing a particular snapshot. | 
 **body** | [**UpdateSnapshotRequest**](UpdateSnapshotRequest.md)| Request body for updating a snapshot. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call returns an empty response body. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

