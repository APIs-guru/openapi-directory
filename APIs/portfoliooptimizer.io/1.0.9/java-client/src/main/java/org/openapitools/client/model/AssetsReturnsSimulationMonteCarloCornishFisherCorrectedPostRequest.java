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
import java.util.Arrays;

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
 * AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-12T07:52:17.384654-04:00[America/New_York]", comments = "Generator version: 7.9.0")
public class AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest {
  public static final String SERIALIZED_NAME_ASSET_AVERAGE_RETURN = "assetAverageReturn";
  @SerializedName(SERIALIZED_NAME_ASSET_AVERAGE_RETURN)
  private BigDecimal assetAverageReturn;

  public static final String SERIALIZED_NAME_ASSET_KURTOSIS = "assetKurtosis";
  @SerializedName(SERIALIZED_NAME_ASSET_KURTOSIS)
  private BigDecimal assetKurtosis;

  public static final String SERIALIZED_NAME_ASSET_SKEWNESS = "assetSkewness";
  @SerializedName(SERIALIZED_NAME_ASSET_SKEWNESS)
  private BigDecimal assetSkewness;

  public static final String SERIALIZED_NAME_ASSET_VOLATILITY = "assetVolatility";
  @SerializedName(SERIALIZED_NAME_ASSET_VOLATILITY)
  private BigDecimal assetVolatility;

  public static final String SERIALIZED_NAME_SIMULATIONS = "simulations";
  @SerializedName(SERIALIZED_NAME_SIMULATIONS)
  private Integer simulations = 1;

  public static final String SERIALIZED_NAME_SIMULATIONS_LENGTH = "simulationsLength";
  @SerializedName(SERIALIZED_NAME_SIMULATIONS_LENGTH)
  private Integer simulationsLength = 1;

  public AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest() {
  }

  public AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest assetAverageReturn(BigDecimal assetAverageReturn) {
    this.assetAverageReturn = assetAverageReturn;
    return this;
  }

  /**
   * The arithmetic average return of the asset, corresponding to the mean of the corrected Cornish-Fisher distribution
   * @return assetAverageReturn
   */
  @javax.annotation.Nonnull
  public BigDecimal getAssetAverageReturn() {
    return assetAverageReturn;
  }

  public void setAssetAverageReturn(BigDecimal assetAverageReturn) {
    this.assetAverageReturn = assetAverageReturn;
  }


  public AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest assetKurtosis(BigDecimal assetKurtosis) {
    this.assetKurtosis = assetKurtosis;
    return this;
  }

  /**
   * The kurtosis of the asset returns, corresponding to the kurtosis of the Cornish-Fisher distribution
   * @return assetKurtosis
   */
  @javax.annotation.Nonnull
  public BigDecimal getAssetKurtosis() {
    return assetKurtosis;
  }

  public void setAssetKurtosis(BigDecimal assetKurtosis) {
    this.assetKurtosis = assetKurtosis;
  }


  public AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest assetSkewness(BigDecimal assetSkewness) {
    this.assetSkewness = assetSkewness;
    return this;
  }

  /**
   * The skewness of the asset returns, corresponding to the skewness of the Cornish-Fisher distribution
   * @return assetSkewness
   */
  @javax.annotation.Nonnull
  public BigDecimal getAssetSkewness() {
    return assetSkewness;
  }

  public void setAssetSkewness(BigDecimal assetSkewness) {
    this.assetSkewness = assetSkewness;
  }


  public AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest assetVolatility(BigDecimal assetVolatility) {
    this.assetVolatility = assetVolatility;
    return this;
  }

  /**
   * The volatility of the asset returns, corresponding to the volatility of the Cornish-Fisher distribution
   * minimum: 0
   * @return assetVolatility
   */
  @javax.annotation.Nonnull
  public BigDecimal getAssetVolatility() {
    return assetVolatility;
  }

  public void setAssetVolatility(BigDecimal assetVolatility) {
    this.assetVolatility = assetVolatility;
  }


  public AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest simulations(Integer simulations) {
    this.simulations = simulations;
    return this;
  }

  /**
   * The number of simulations to perform
   * minimum: 1
   * @return simulations
   */
  @javax.annotation.Nullable
  public Integer getSimulations() {
    return simulations;
  }

  public void setSimulations(Integer simulations) {
    this.simulations = simulations;
  }


  public AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest simulationsLength(Integer simulationsLength) {
    this.simulationsLength = simulationsLength;
    return this;
  }

  /**
   * The number of time period(s) to simulate per simulation
   * minimum: 1
   * @return simulationsLength
   */
  @javax.annotation.Nullable
  public Integer getSimulationsLength() {
    return simulationsLength;
  }

  public void setSimulationsLength(Integer simulationsLength) {
    this.simulationsLength = simulationsLength;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest assetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest = (AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest) o;
    return Objects.equals(this.assetAverageReturn, assetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.assetAverageReturn) &&
        Objects.equals(this.assetKurtosis, assetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.assetKurtosis) &&
        Objects.equals(this.assetSkewness, assetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.assetSkewness) &&
        Objects.equals(this.assetVolatility, assetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.assetVolatility) &&
        Objects.equals(this.simulations, assetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.simulations) &&
        Objects.equals(this.simulationsLength, assetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.simulationsLength);
  }

  @Override
  public int hashCode() {
    return Objects.hash(assetAverageReturn, assetKurtosis, assetSkewness, assetVolatility, simulations, simulationsLength);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest {\n");
    sb.append("    assetAverageReturn: ").append(toIndentedString(assetAverageReturn)).append("\n");
    sb.append("    assetKurtosis: ").append(toIndentedString(assetKurtosis)).append("\n");
    sb.append("    assetSkewness: ").append(toIndentedString(assetSkewness)).append("\n");
    sb.append("    assetVolatility: ").append(toIndentedString(assetVolatility)).append("\n");
    sb.append("    simulations: ").append(toIndentedString(simulations)).append("\n");
    sb.append("    simulationsLength: ").append(toIndentedString(simulationsLength)).append("\n");
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
    openapiFields.add("assetAverageReturn");
    openapiFields.add("assetKurtosis");
    openapiFields.add("assetSkewness");
    openapiFields.add("assetVolatility");
    openapiFields.add("simulations");
    openapiFields.add("simulationsLength");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("assetAverageReturn");
    openapiRequiredFields.add("assetKurtosis");
    openapiRequiredFields.add("assetSkewness");
    openapiRequiredFields.add("assetVolatility");
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest is not found in the empty JSON string", AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.class));

       return (TypeAdapter<T>) new TypeAdapter<AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest>() {
           @Override
           public void write(JsonWriter out, AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest
   * @throws IOException if the JSON string is invalid with respect to AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest
   */
  public static AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.class);
  }

  /**
   * Convert an instance of AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

