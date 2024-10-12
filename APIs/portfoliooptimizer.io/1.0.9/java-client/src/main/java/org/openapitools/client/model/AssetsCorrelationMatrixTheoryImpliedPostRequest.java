/*
 * Portfolio Optimizer
 * Portfolio Optimizer is a [Web API](https://en.wikipedia.org/wiki/Web_API) to analyze and optimize investment portfolios (collection of financial assets such as stocks, bonds, ETFs, crypto-currencies) using modern portfolio theory algorithms (mean-variance, VaR, etc.).  # API General Information    Portfolio Optimizer is based on [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) for easy integration, uses [JSON](https://en.wikipedia.org/wiki/JSON) for the exchange of data and uses a standard [HTTP verb](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) (`POST`) to represent the action(s).  Portfolio Optimizer is also as secured as a Web API could be:  * [256-bit HTTPS Encryption](https://en.wikipedia.org/wiki/HTTPS) * No usage of cookies * No usage of personal data    ## API Headers  The following HTTP header(s) are required when calling Portfolio Optimizer endpoints: * `Content-type: application/json`     This header specifies that the data provided in input to the endpoint is in JSON format  The following HTTP header(s) are optional when calling Portfolio Optimizer endpoints: * `Content-Encoding: gzip`     This header indicates that the data provided in input to the endpoint is compressed with gzip. * `X-API-Key: <private API key>`     This header enables [authenticated users](#auth) to provide their private [API key](#overview--api-key) in order to [benefit from higher API limits](#overview--api-limits)  ## API Key Portfolio Optimizer is free to use, but not free to run.  In order to obtain an API key and benefit from [higher API limits](#overview--api-limits), a *small* participation to Portfolio Optimizer running costs is required.  This participation takes the form of coffee(s), with one coffee = one month of usage.  <p><a href=\"https://www.buymeacoffee.com/portfolioopt\"><img alt='Buy a Coffee at buymeacoffee.com' src=\"https://img.buymeacoffee.com/button-api/?text=Buymeacoffee.com&emoji=&slug=portfolioopt&button_colour=000000&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00\"></a></p>   > **Notes:**  > * Please make sure not to expose your API key publicly!  ## API Limits   Portfolio Optimizer comes with *fairly reasonable* API limits.  For anonymous users:   * The API requests are restricted to a subset of all the available endpoints and/or endpoints features   * The API requests are limited to 1 request per second for all the anonymous users combined, with concurrent requests rejected  * The API requests are limited to 1 second of execution time * The API requests are limited to 20 assets, 250 portfolios, 500 series data points and 5 factors  For authenticated users with an [API key](#overview--api-key):   * The API requests have access to all the available endpoints and endpoints features * The API requests are limited to 10000 requests per 24 hour per API key, with concurrent requests queued * The API requests are limited to 2.5 seconds of execution time * The API requests are limited to 100 assets, 1250 portfolios, 2500 series data points and 25 factors  > **Notes:**  > * It is possible to further relax the API limits, or to disable the API limits alltogether; please [contact the support](https://portfoliooptimizer.io/contact/) for more details. > * Information on the API rate limits are provided in response messages HTTP headers `x-ratelimit-*`:   >   * `x-ratelimit-limit-second`, the limit on the number of API requests per second >   * `x-ratelimit-remaining-second`, the number of remaining API requests in the current second     >   * `x-ratelimit-limit-minute`, the limit on the number of API requests per minute >   * ...  ## API Regions Portfolio Optimizer servers are located in Western Europe.  > **Notes:**  > * It is possible to deploy Portfolio Optimizer in other geographical regions, for example to improve the API latency; please [contact the support](https://portfoliooptimizer.io/contact/) for more details.   ## API Response Codes         Standard [HTTP response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) are used by Portfolio Optimizer to provide details on the status of API requests.  | HTTP Code | Description | Notes | | --------- | ----------- | ----- | | 200 | Request successfully processed | - | | 400 | Request failed to be processed because of incorrect content | The response message body contains information on the incorrect content | | 401 | Request failed to be processed because of invalid API key | - | | 404 | Request failed to be processed because of non existing endpoint | The requested endpoint might exist, but needs to be accessed with another HTTP method (e.g., `POST` instead of `GET`) | | 429 | Request failed to be processed because of API limits violated | The response message HTTP headers `x-ratelimit-*` contain information on the [API limits](#overview--api-limits) | | 500 | Request failed to be processed because of an internal error | Something went wrong on Portfolio Optimizer side, do not hesitate to [report the issue](#overview--support) | | 502 | Request failed to be processed because of a temporary connectivity error | Something went wrong on Portfolio Optimizer side, please check the [API status](#overview--api-status) and do not hesitate to [report the issue](#overview--support) |  ## API Status    Portfolio Optimizer is monitored 24/7 by [UptimeRobot](https://stats.uptimerobot.com/wgW71SL1AW).  # Support  For any issue or question about Portfolio Optimizer, please do not hesitate to [contact the support](https://portfoliooptimizer.io/contact/). 
 *
 * The version of the OpenAPI document: 1.0.9
 * Contact: contact@portfoliooptimizer.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.openapitools.client.model.AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.openapitools.client.JSON;

/**
 * AssetsCorrelationMatrixTheoryImpliedPostRequest
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-12T07:52:17.384654-04:00[America/New_York]", comments = "Generator version: 7.9.0")
public class AssetsCorrelationMatrixTheoryImpliedPostRequest {
  public static final String SERIALIZED_NAME_ASSETS = "assets";
  @SerializedName(SERIALIZED_NAME_ASSETS)
  private List<AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner> assets = new ArrayList<>();

  public static final String SERIALIZED_NAME_ASSETS_CORRELATION_MATRIX = "assetsCorrelationMatrix";
  @SerializedName(SERIALIZED_NAME_ASSETS_CORRELATION_MATRIX)
  private List<List<BigDecimal>> assetsCorrelationMatrix = new ArrayList<>();

  /**
   * The hierarchical clustering method to use
   */
  @JsonAdapter(ClusteringMethodEnum.Adapter.class)
  public enum ClusteringMethodEnum {
    SINGLE_LINKAGE("singleLinkage"),
    
    AVERAGE_LINKAGE("averageLinkage"),
    
    COMPLETE_LINKAGE("completeLinkage"),
    
    WARD_LINKAGE("wardLinkage");

    private String value;

    ClusteringMethodEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static ClusteringMethodEnum fromValue(String value) {
      for (ClusteringMethodEnum b : ClusteringMethodEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<ClusteringMethodEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ClusteringMethodEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public ClusteringMethodEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return ClusteringMethodEnum.fromValue(value);
      }
    }

    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      String value = jsonElement.getAsString();
      ClusteringMethodEnum.fromValue(value);
    }
  }

  public static final String SERIALIZED_NAME_CLUSTERING_METHOD = "clusteringMethod";
  @SerializedName(SERIALIZED_NAME_CLUSTERING_METHOD)
  private ClusteringMethodEnum clusteringMethod = ClusteringMethodEnum.AVERAGE_LINKAGE;

  public AssetsCorrelationMatrixTheoryImpliedPostRequest() {
  }

  public AssetsCorrelationMatrixTheoryImpliedPostRequest assets(List<AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner> assets) {
    this.assets = assets;
    return this;
  }

  public AssetsCorrelationMatrixTheoryImpliedPostRequest addAssetsItem(AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner assetsItem) {
    if (this.assets == null) {
      this.assets = new ArrayList<>();
    }
    this.assets.add(assetsItem);
    return this;
  }

  /**
   * Get assets
   * @return assets
   */
  @javax.annotation.Nonnull
  public List<AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner> getAssets() {
    return assets;
  }

  public void setAssets(List<AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner> assets) {
    this.assets = assets;
  }


  public AssetsCorrelationMatrixTheoryImpliedPostRequest assetsCorrelationMatrix(List<List<BigDecimal>> assetsCorrelationMatrix) {
    this.assetsCorrelationMatrix = assetsCorrelationMatrix;
    return this;
  }

  public AssetsCorrelationMatrixTheoryImpliedPostRequest addAssetsCorrelationMatrixItem(List<BigDecimal> assetsCorrelationMatrixItem) {
    if (this.assetsCorrelationMatrix == null) {
      this.assetsCorrelationMatrix = new ArrayList<>();
    }
    this.assetsCorrelationMatrix.add(assetsCorrelationMatrixItem);
    return this;
  }

  /**
   * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
   * @return assetsCorrelationMatrix
   */
  @javax.annotation.Nonnull
  public List<List<BigDecimal>> getAssetsCorrelationMatrix() {
    return assetsCorrelationMatrix;
  }

  public void setAssetsCorrelationMatrix(List<List<BigDecimal>> assetsCorrelationMatrix) {
    this.assetsCorrelationMatrix = assetsCorrelationMatrix;
  }


  public AssetsCorrelationMatrixTheoryImpliedPostRequest clusteringMethod(ClusteringMethodEnum clusteringMethod) {
    this.clusteringMethod = clusteringMethod;
    return this;
  }

  /**
   * The hierarchical clustering method to use
   * @return clusteringMethod
   */
  @javax.annotation.Nullable
  public ClusteringMethodEnum getClusteringMethod() {
    return clusteringMethod;
  }

  public void setClusteringMethod(ClusteringMethodEnum clusteringMethod) {
    this.clusteringMethod = clusteringMethod;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AssetsCorrelationMatrixTheoryImpliedPostRequest assetsCorrelationMatrixTheoryImpliedPostRequest = (AssetsCorrelationMatrixTheoryImpliedPostRequest) o;
    return Objects.equals(this.assets, assetsCorrelationMatrixTheoryImpliedPostRequest.assets) &&
        Objects.equals(this.assetsCorrelationMatrix, assetsCorrelationMatrixTheoryImpliedPostRequest.assetsCorrelationMatrix) &&
        Objects.equals(this.clusteringMethod, assetsCorrelationMatrixTheoryImpliedPostRequest.clusteringMethod);
  }

  @Override
  public int hashCode() {
    return Objects.hash(assets, assetsCorrelationMatrix, clusteringMethod);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AssetsCorrelationMatrixTheoryImpliedPostRequest {\n");
    sb.append("    assets: ").append(toIndentedString(assets)).append("\n");
    sb.append("    assetsCorrelationMatrix: ").append(toIndentedString(assetsCorrelationMatrix)).append("\n");
    sb.append("    clusteringMethod: ").append(toIndentedString(clusteringMethod)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("assets");
    openapiFields.add("assetsCorrelationMatrix");
    openapiFields.add("clusteringMethod");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("assets");
    openapiRequiredFields.add("assetsCorrelationMatrix");
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to AssetsCorrelationMatrixTheoryImpliedPostRequest
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!AssetsCorrelationMatrixTheoryImpliedPostRequest.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in AssetsCorrelationMatrixTheoryImpliedPostRequest is not found in the empty JSON string", AssetsCorrelationMatrixTheoryImpliedPostRequest.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!AssetsCorrelationMatrixTheoryImpliedPostRequest.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `AssetsCorrelationMatrixTheoryImpliedPostRequest` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : AssetsCorrelationMatrixTheoryImpliedPostRequest.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // ensure the json data is an array
      if (!jsonObj.get("assets").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `assets` to be an array in the JSON string but got `%s`", jsonObj.get("assets").toString()));
      }

      JsonArray jsonArrayassets = jsonObj.getAsJsonArray("assets");
      // validate the required field `assets` (array)
      for (int i = 0; i < jsonArrayassets.size(); i++) {
        AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner.validateJsonElement(jsonArrayassets.get(i));
      };
      // ensure the required json array is present
      if (jsonObj.get("assetsCorrelationMatrix") == null) {
        throw new IllegalArgumentException("Expected the field `linkedContent` to be an array in the JSON string but got `null`");
      } else if (!jsonObj.get("assetsCorrelationMatrix").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `assetsCorrelationMatrix` to be an array in the JSON string but got `%s`", jsonObj.get("assetsCorrelationMatrix").toString()));
      }
      if ((jsonObj.get("clusteringMethod") != null && !jsonObj.get("clusteringMethod").isJsonNull()) && !jsonObj.get("clusteringMethod").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `clusteringMethod` to be a primitive type in the JSON string but got `%s`", jsonObj.get("clusteringMethod").toString()));
      }
      // validate the optional field `clusteringMethod`
      if (jsonObj.get("clusteringMethod") != null && !jsonObj.get("clusteringMethod").isJsonNull()) {
        ClusteringMethodEnum.validateJsonElement(jsonObj.get("clusteringMethod"));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!AssetsCorrelationMatrixTheoryImpliedPostRequest.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'AssetsCorrelationMatrixTheoryImpliedPostRequest' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<AssetsCorrelationMatrixTheoryImpliedPostRequest> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(AssetsCorrelationMatrixTheoryImpliedPostRequest.class));

       return (TypeAdapter<T>) new TypeAdapter<AssetsCorrelationMatrixTheoryImpliedPostRequest>() {
           @Override
           public void write(JsonWriter out, AssetsCorrelationMatrixTheoryImpliedPostRequest value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public AssetsCorrelationMatrixTheoryImpliedPostRequest read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of AssetsCorrelationMatrixTheoryImpliedPostRequest given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of AssetsCorrelationMatrixTheoryImpliedPostRequest
   * @throws IOException if the JSON string is invalid with respect to AssetsCorrelationMatrixTheoryImpliedPostRequest
   */
  public static AssetsCorrelationMatrixTheoryImpliedPostRequest fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, AssetsCorrelationMatrixTheoryImpliedPostRequest.class);
  }

  /**
   * Convert an instance of AssetsCorrelationMatrixTheoryImpliedPostRequest to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

