import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostConfigApacheSlingReferrerFilterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=allow.empty" })
  allowEmpty?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=allow.empty@TypeHint" })
  allowEmptyAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=allow.hosts" })
  allowHosts?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=allow.hosts.regexp" })
  allowHostsRegexp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=allow.hosts.regexp@TypeHint" })
  allowHostsRegexpAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=allow.hosts@TypeHint" })
  allowHostsAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter.methods" })
  filterMethods?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter.methods@TypeHint" })
  filterMethodsAtTypeHint?: string;
}


export class PostConfigApacheSlingReferrerFilterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostConfigApacheSlingReferrerFilterQueryParams;
}


export class PostConfigApacheSlingReferrerFilterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
